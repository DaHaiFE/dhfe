---
title: element upload总结
date: 2019-01-28
tags: [JavaScript]
description: 可以同时上传多张图片，默认显示之前已经上传的图片列表，双击图片放大。
---
同时上传多张图片，默认显示之前已经上传的图片列表，双击图片放大等功能。
<!-- more -->
我在开发图片上传功能时遇到几个问题，现在总结如下：

1.上传图片参数

2.上传图片获取不同的上传地址

3.上传图片报错

4.显示已经上传的图片。

5.保存上传图片传参给后端。

6.删除图片功能。

7.图片放大功能

希望开发类似功能的同事避免一些开发前没想到的问题。
## 1.上传图片参数
```
<el-upload>
  class="upload-demo" //自定义样式
  ref="exercises-pics" //ref 用了被用来给DOM元素或直接操作DOM元素。注意：vue直接操作DOM就必须用ref 属性进行注册
  :action="uploadApi" //图片上传地址
  :data="uploadData"  //上传图片所传参数。
  :on-success="examSuccess"//文件上传成功时的钩子
  :before-upload="beforeUpload"//上传文件之前的钩子成功失败都会调用
  :on-preview="handlePreview" // 点击文件列表中已上传的文件时的钩子 图片放大时用到。
  :on-remove="handleRemove" // 删除文件列表时调用的函数钩子。
  :multiple="true" //支持多选文件
  :on-exceed="handleLimit" //文件超出个数限制的钩子
  list-type="picture" //文件列表类型
  :file-list="upForm.exam_pics" // 上传的文件列表
  <el-button size="small" type="primary" class="upBtn">上传试卷图片</el-button>
</elupload>
```
  js代码
 ```
 const ACCESS_TOKEN =some.access_token : ''
 export default {
  return {
    uploadApi: '',
    upForm: {
      exam_pics: []
    },
    uploadData: {
      project: 'crm',
      business: 'exam_paper',
      access_token: ACCESS_TOKEN
    }
   },
   methods: {
```
   最多上传图片数
```
    handleLimit(file,fileList) {
      this.overForm('最多上传10张图片', 1)
    },
```
 上传文件之前调用的函数，可设置上传图片大小和格式
```
     beforeUpload(file) {
       const isType = file.type
       const isLt5M = file.size / 1024 < 5120
       if (isType !== 'image/jpeg' && isType !== 'image/png') {
         this.$message.error('上传图片只能是 jpg/png 格式!')
         return false
       } else if (!isLt5M) {
         this.$message.error('上传图片大小不能超过 5M!')
         return false
       }
     }
    },
```
  点击某一个图片放大该图片
```
    handlePreview(file) {
      window.open(file.response.result[0])
    },
```
  图片上传成功调用的函数
```
    examSuccess(response, file, fileList) {
      if (response.status === 1) {
        for (let i = 0; i < response.result.length; i++) {
          if(response.result[i].indexOf("http") !=-1){
            this.upForm.exam_pics.push(response.result[0])
          }
        }
       } else {
         this.$message({
           message: response.message
        })
       }
     }
```
  删除文件列表时调用的函数钩子。
```
 handleRemove(file, fileList) {
   let picture = this.upForm.exam_pics.filter((item, index, arr) => {
     return item !== file.response.result[0]
   })
   this.upForm.exam_pics = picture
 },
}
},
```
接下来写下在整个开发中遇到的问题，出现问题的原因，及解决方案

## 2.上传图片获取不同的上传地址

问题：,每个环境下对应不同图片上传地址，不同的环境需要修改一次代码太麻烦啦！

  解决方案：asynData 方法能够在渲染组件之前异步获取数据，env属性能够获取nuxt.config.js 中配置的环境变量，所以我们在nuxt.dev.config.js中配置了以下地址
```
 env: {testPaperAnalysisUpload: '//some.domain.com/upload/localfile'}
   ```
  在nuxt.prod.config.js中配置了以下地址
```
 env: {testPaperAnalysisUpload: '//some.domain.com/upload/localfile'}
```

  这样我们就可以通过asyncData函数的env属性动态获取不同环境下的上传地址啦,代码如下：。
```
  asyncData({env}) {
    return {uploadApi: env.testPaperAnalysisUpload}
  }
}
```
  写到这里，我以为上传的代码已经开发完然而却又遇到下面问题

 ## 3.上传图片报错

  问题：页面直接报错uid is not a function,图片上传失败

  原因：:file-list="upForm.exam_pics" file-list是一个对象数组，并且默认需要图片uid，而examSuccess()函数中upForm.exam_pics是一个

  数组，没有uid这个值，并且后台也只关心图片存储地址，所以只能返回图片地址，从后台是没法拿到uid值。

  解决方:：直接去掉:<el-upload></el-upload>组件中的:file-list="upForm.exam_pics，在试着上传发现可以上传成功了。

## 4.显示已经上传的图片。

  问题：再次进入页面，之前上传的图片缩略图并未显示出来。

  原因：因为去掉了组件中:file-list="upForm.exam_pics" 没了这个属性那图片当然就展示不出来了。

  解决方案：上传图片时给upForm.exam_pics()添加uid属性。examSuccess方法改为：
```
examSuccess(response, file, fileList) {
      if (response.status === 1) {
        for (let i = 0; i < response.result.length; i++) {
          if(response.result[i].indexOf("http") !=-1){
            this.upForm.exam_pics.push({
            url: response.result[0],
            uid: 'id'+i
            })
            }
          }
        }
       } else {
         this.$message({
           message: response.message
        })
       }
     }
这样上传就不会报错了。
```
  ## 5.保存上传图片传参给后端

  问题：传值失败

  原因：后台需要的参数是数组，不是对象，我需要的是一个对象而后台返回数组

  解决方案:把后台返回数组转为对象，在给后台传值时把对象在转为数组，方法如下:

 对象转数组在给后台传参是调用
```
let split = (which) => {
  return which.map((i) => i.url)
}

```
  数组转对象在接收后台返回图片列表时调用
```
 let join = (origin) => {
  return origin.map(i => ({url: i}))
 }

 ```
  ## 6.删除图片功能。

  问题：删除某张图片时，页面又报错Uncaught TypeError: this.upForm.exam_pics.files.filter is not a function，删除图片失败。

 在看之前写的删除方法

```
 handleRemove(file, fileList) {
   let picture = this.upForm.exam_pics.filter((item, index, arr) => {
     return item !== file.response.result[0]
   })
   this.upForm.exam_pics = picture
 }

 ```
  原因：通过filter()是一个数组方法，通过之前的数组转对象方法，当前的this.upForm.exam_pics是一个对象，所以删除方法报错

  解决方案如下：
 ```
handleRemove(file, fileList) {
   let picture = this.upForm.exam_pics.filter(val => {
     return val.url !== file.response.result[0]
   })
   this.upForm.exam_pics = this.upForm.exam_pics.push(picture)
 }
 再次测试删除，显示之前保存的缩略图都可以正常显示啦
 ```
  ## 7.图片放大功能

   问题：测试图片放大功能，却发现点击无效。

   原因：图片上未绑定点击预览功能

   解决方案：升级element组件库,给图片绑定点击预览功能。

