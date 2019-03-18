---
title: 那些年我们接过的webSocket
date: 2018-03-08
tags: [JavaScript]
description: 站内信是底层的通用系统之一，其主要功能是在web上为用户提供即时的消息通知，目前仅支持系统发出的通知，如客服点击发货后，对应的需要知道这条通知的用户在系统内会收到一条消息通知。目前该功能暂不支持用户向系统或其他用户发送聊天消息。此外，这也是本人第一次将ws用于生产环境，如果有任何不足之处欢迎批评指正。
---

站内信是底层的通用系统之一，其主要功能是在web上为用户提供即时的消息通知，目前仅支持系统发出的通知，如客服点击发货后，对应的需要知道这条通知的用户在系统内会收到一条消息通知。目前该功能暂不支持用户向系统或其他用户发送聊天消息。此外，这也是本人第一次将ws用于生产环境，如果有任何不足之处欢迎批评指正。
<!-- more -->

# 那些年我们接过的webSocket

我们的管理后台的站内信已经投入使用有一段时间，今天给大家扒一把源代码。

本文不讨论ws是什么，也不讨论轮询、长连接与websocket的区别，这些在网络上屡见不鲜，如果年你还不知道ws是什么，那么赶紧去求助搜索引擎吧。等搞懂本段前面的内容再来看向下看吧。

首先呢给大家介绍一下我们的站内信系统。站内信是底层的通用系统之一，其主要功能是在web上为用户提供即时的消息通知，目前仅支持系统发出的通知，如客服点击发货后，对应的需要知道这条通知的用户在系统内会收到一条消息通知。目前该功能暂不支持用户向系统或其他用户发送聊天消息。此外，这也是本人第一次将ws用于生产环境，如果有任何不足之处欢迎批评指正。

本文内容提要：

+ 建立ws连接
+ 主动断开ws
+ 在https协议下
+ 心跳同步与断开重连
+ 导出已function而非object
+ 完整示例

## 建立ws连接

### 获得WS的实例

浏览器内置了WebSocket类型，建立连接只需要获得WebSocket的实例即可建立连接，在实例化的过程中传入服务端提供ws服务的接口（ip或者链接）。

```
let ws = new WebScoket(url)
```

### ws实例的部分事件

+ open 事件

一旦服务器响应了WebSocket连接请求，open事件触发并建立一个连接。open事件对应的回调函数称作onopen。本例中，我们在成功建立连接后向服务端发送了一些用户的信息，这些信息用来注册消息服务。

```
  ws.onopene = () => {
       let {readyState} = ws
          if (+readyState === 1) {
            time = 0
          }
          let d = {
            cmd: "kkk",
            system: xx,
            access_token: ACCESS_TOKEN
          }
          let dStr = JSON.stringify(d)
          console.log('webSocket-Connection-established')
          ws.send(dStr)
    }

 ```

+ readyState属性 与 readyStateChange事件

与ajax相似，ws实例通过readyState属性表示当前链接状态，并且当readyState发生变更时会触发readyStateChange事件，ws实例注册该事件的handler函数为onreadyStateChange属性。

    + 0 ：对应常量CONNECTING (numeric value 0)，
      正在建立连接连接，还没有完成。The connection has not yet been established.
    + 1 ：对应常量OPEN (numeric value 1)，
      连接成功建立，可以进行通信。The WebSocket connection is established and communication is possible.
    + 2 ：对应常量CLOSING (numeric value 2)
      连接正在进行关闭握手，即将关闭。The connection is going through the closing handshake.
    + 3 : 对应常量CLOSED (numeric value 3)
      连接已经关闭或者根本没有建立。The connection has been closed or could not be opened.

+ message 事件

WebSocket消息包含来自服务器的数据。message事件在接收到消息时触发，对应于该事件的回调函数是onmessage。和ajax不同的是，ws获取的数据将会自动传入到回调的handler中。如果你需要在收到消息后做一些处理，例如本例子中，我们收到消息后需要调用消息通知弹窗，并且更新store中的未读消息数量。


```
ws.onmessage = (e) => {
  // 更新store
  // 弹窗提示
  // 后面有完整示例
}
```

+ error 事件

error事件在响应意外故障的时候触发。与该事件对应的回调函数为onerror。错误还会导致WebSocket连接关闭。如果你接收一个error事件，可以预期很快就会触发close事件。close事件中的代码和原因有时候能告诉你错误的根源。error事件处理程序是调用服务器重连逻辑以及处理来自WebSocket对象的异常的最佳场所。

+ close事件

close事件在WebSocket连接关闭时触发。对应于close事件的回调函数是onclose。一旦连接关闭，客户端和服务器不再能接收或者发送消息。

## 客户端主动断开ws

前面我们陈述了如何建立ws连接，但在实际场景中很多时候都需要我们主动断开连接。例如用户退出登录后，我们需要告知服务端用户下线了，不必再推送消息了。

ws内置了主动断开的方法——close方法，注意，和dom事件不用，在dom事件中如果需要直接调用dom的click事件处理函数，我们可以通过dom.onclick()的方式，但是ws直接调用ws.onclose()是无效的。只能调用close方法

```
ws.close() // 主动断开ws
```

## 在https协议下使用ws

在http协议中，我们使用的ws://ur的方式建立连接，但是如果页面使用的是https，而websocket使用ws协议将会触发错误导致连接失败。正确的开启方式是使用wss://url的方式建立连接。如果需要兼http和https两种方式，你可以使用以下方式：

```
const IS_HTTPS = document.location.protocol.includes('https')
let wsProtocol = IS_HTTPS ? 'wss://' : 'ws://'
```

## 心跳同步与断开重连

websocket在建立连接后，可能会因为网络抖动或者长时间没有操作而断开连接。
通常解决这些问题的方案有以下方法，

+ 心跳同步
+ 断开重连
+ 二者结合

心跳同步，顾名思义，和客户端倒计时心跳同步原理相同，间隔一定的的时间主动向服务器发送一些数据，以此保持存活状态。

断开重连，在上面介绍事件时已经提及过这个解决方案，当ws因为异常中断时会触发error事件，前端收到error会断开ws，进而触发close行为。

于是，我们监听了error事件，并且在其中重启ws，这里说重启是个不大恰当的行为，所谓重启是新建一个新的WebScoket实例，而事实上前一个实例已经无法再次使用。

我们使用断开重连的方式，除非特殊要求，我个人认为没有必要增加额外的性能开销去主动维持连接，反而应该采用被动的方式维护，一旦断开，前端即刻重启连接。

这里还有一点需要注意，如果断开是偶然的，那么重连即可成功，若服务端发生了严重错误，导致无法提供ws服务，那么不断的尝试是没有意义的。所以在这里我们还设置了尝试次数，当达到尝试上限时仍未能建立连接，我们就停止无效的尝试。

## 导出一个函数

在设计这个ws模块之初，我的确是导出了一个对象的。但是后来考虑到代码的可扩展性，受到纯函数思想的启发，我又将其改造成了一个函数，但这个模块还算不上纯函数，但是为了适（懒）应（惰）现有的业务场景，其中还掺杂了一些业务。但是如果一定要改成纯函数，也是很快的。
这里给大家留一个思考题，大家可以尝试如何将更新未读消息、点击跳转抽离出来？
回归正题，改造成函数相比对象带来的改变如下：

+ 代码更专注ws连接管理；
+ 以参数形式开放模块的入口，增强代码的可扩展性；举一个简单的例子，如果后期需要区分开发、测试、线上的ws连接，只需要增加一个ENV的参数；
+ 增强模块使用者的自由度，使用者可以选择在需要的时候调用方法创建ws服务，而不是一旦导入就执行创建ws服务；

## 完整代码

```
export const inlineWebSocket = (that, ACCESS_TOKEN) => {
  let host = document.location.host
  const IS_HTTPS = document.location.protocol.includes('https')
  let wsProtocol = IS_HTTPS ? 'wss://' : 'ws://'
  let url = `${wsProtocol}${host}`
  let time = 0 //  重连次数
  let socket = {
    init() {
      // ws initialize
      this.wsUri = url
      this.webscoket = new WebSocket(url)
      this.webscoket.onopen = (evt) => {
        let {readyState} = this.webscoket
        if (+readyState === 1) {
          time = 0
        }
        let d = {
          cmd: "rgb",
          system: 77, //
          access_token: ACCESS_TOKEN
        }
        let dStr = JSON.stringify(d)
        console.log('webSocket-Connection-established')
        this.webscoket.send(dStr)
      }
      this.webscoket.onreadyStateChange = () => {
        console.log(this.webscoket.readyState)
      }

      this.webscoket.onclose = () => {
        console.log('webSocket close')
        if (time >= 3) {
          return false
        } else {
          time++
          this.init()
        }
      }

      this.webscoket.onmessage = (e) => {
        let isString = typeof e.data === 'string'
        let d = isString ? JSON.parse(e.data) : e.data
        that.updateUnreadMsgNum({payload}) // 更新未读消息数量
        that.$internalNotify({// some options}) // 通知
      }

      this.webscoket.onerror = (e) => {
        console.log('WebSocket has been shut down in accident,the following is the error emssage,please ask for technological support!!')
        console.log('we are trying to reconnect')
      }

      return this
    },
    shutWebSocket() {
      time = 3
      this.webscoket.close()
      return this
    }
  }

  return socket
}

```
