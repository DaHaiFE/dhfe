---
title: WXS脚本语言
date: 2018-12-18
tags: [Wxs, JavaScript]
description: WXS脚本语言Weixin Script脚本的简称，是JS、JSON、WXML、WXSS之后又一大小程序内部文件类型。截至到目前小程序已经提供了5种文件类型。
---

WXS脚本语言Weixin Script脚本的简称，是JS、JSON、WXML、WXSS之后又一大小程序内部文件类型。截至到目前小程序已经提供了5种文件类型。

<!-- more -->

HERE WE GO!<br>

## WXS脚本语言
WXS脚本语言Weixin Script脚本的简称，是JS、JSON、WXML、WXSS之后又一大小程序内部文件类型。截至到目前小程序已经提供了5种文件类型。<br>

1) wxs代码可以编写在wxml文件中的&#60;wxs&#62;标签内，或者是XXX.wxs的文件内引用。不管是标签还是文件都是一个单独的模块。
2) 每个模块里面定义的变量与函数都默认为私有，只能通过module.exports使用模块内部的私有变量与函数。

## 那么这个脚本语言我们能用来解决些什么问题呢？__
比如，在模板渲染、条件渲染、列表渲染过程中，在不依托后端支持的情况下，对数据进行二次处理，如切分，取整，拼接.....使得数据处理更灵活
比如这样：
```
  <wxs module="util">
      var sub = function(val) {
          return val.substring(0, 4)
      }
      module.exports.sub = sub;
  </wxs>

  <wxs module="split">
      var sub = function(val) {
          return val.split('.')
      }
      module.exports.sub = sub;
  </wxs>

  <wxs module="inte">
      var sub = function(val) {
          return parseInt(val)
      }
      module.exports.sub = sub;
  </wxs>
```


注意：
&#60;wxs&#62; 模块只能在定义模块的 WXML 文件中被访问到。使用&#60;include&#62; 或 &#60;import&#62; 时，&#60;wxs&#62; 模块不会被引入到对应的 WXML 文件中。
&#60;template&#62; 标签中，只能使用定义该 &#60;template&#62; 的 WXML 文件中定义的 &#60;wxs&#62; 模块。
wxs 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。
wxs 与 javascript 是不同的语言，有自己的语法，并不和 javascript 一致。
wxs 的运行环境和其他 javascript 代码是隔离的，wxs 中不能调用其他 javascript 文件中定义的函数，也不能调用小程序提供的API。
wxs 函数不能作为组件的事件回调。
由于运行环境的差异，在 iOS 设备上小程序内的 wxs 会比 javascript 代码快2~20 倍。在 android 设备上二者运行效率无差异。
