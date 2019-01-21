(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{332:function(s,n,t){"use strict";t.r(n);var e=t(1),a=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"content"},[t("p",[s._v("WXS脚本语言Weixin Script脚本的简称，是JS、JSON、WXML、WXSS之后又一大小程序内部文件类型。截至到目前小程序已经提供了5种文件类型。")]),t("p",[s._v("HERE WE GO!"),t("br")]),t("h2",{attrs:{id:"wxs脚本语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wxs脚本语言","aria-hidden":"true"}},[s._v("#")]),s._v(" WXS脚本语言")]),t("p",[s._v("WXS脚本语言Weixin Script脚本的简称，是JS、JSON、WXML、WXSS之后又一大小程序内部文件类型。截至到目前小程序已经提供了5种文件类型。"),t("br")]),t("ol",[t("li",[s._v("wxs代码可以编写在wxml文件中的<wxs>标签内，或者是XXX.wxs的文件内引用。不管是标签还是文件都是一个单独的模块。")]),t("li",[s._v("每个模块里面定义的变量与函数都默认为私有，只能通过module.exports使用模块内部的私有变量与函数。")])]),t("h2",{attrs:{id:"那么这个脚本语言我们能用来解决些什么问题呢？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#那么这个脚本语言我们能用来解决些什么问题呢？","aria-hidden":"true"}},[s._v("#")]),s._v(" 那么这个脚本语言我们能用来解决些什么问题呢？__")]),t("p",[s._v("比如，在模板渲染、条件渲染、列表渲染过程中，在不依托后端支持的情况下，对数据进行二次处理，如切分，取整，拼接.....使得数据处理更灵活\n比如这样：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('  <wxs module="util">\n      var sub = function(val) {\n          return val.substring(0, 4)\n      }\n      module.exports.sub = sub;\n  </wxs>\n\n  <wxs module="split">\n      var sub = function(val) {\n          return val.split(\'.\')\n      }\n      module.exports.sub = sub;\n  </wxs>\n\n  <wxs module="inte">\n      var sub = function(val) {\n          return parseInt(val)\n      }\n      module.exports.sub = sub;\n  </wxs>\n')])]),t("p",[s._v("注意：\n<wxs> 模块只能在定义模块的 WXML 文件中被访问到。使用<include> 或 <import> 时，<wxs> 模块不会被引入到对应的 WXML 文件中。\n<template> 标签中，只能使用定义该 <template> 的 WXML 文件中定义的 <wxs> 模块。\nwxs 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。\nwxs 与 javascript 是不同的语言，有自己的语法，并不和 javascript 一致。\nwxs 的运行环境和其他 javascript 代码是隔离的，wxs 中不能调用其他 javascript 文件中定义的函数，也不能调用小程序提供的API。\nwxs 函数不能作为组件的事件回调。\n由于运行环境的差异，在 iOS 设备上小程序内的 wxs 会比 javascript 代码快2~20 倍。在 android 设备上二者运行效率无差异。")])])}],!1,null,null,null);a.options.__file="wxs.md";n.default=a.exports}}]);