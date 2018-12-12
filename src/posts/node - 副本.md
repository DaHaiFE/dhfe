---
title: node
date: 2018-12-06
tags: [H5游戏开发]
description: 李冀说的那些关于高校老师的黑幕，我或多或少也在别人嘴里听到过。物欲横流，一切向钱看齐，某些教授也不例外。各行各业都有自己的酸楚，各行各业也都有自己的生财之道
---

qq李冀说的那些关于高校老师的黑幕，我或多或少也在别人嘴里听到过。物欲横流，一切向钱看齐，某些教授也不例外。各行各业都有自己的酸楚，各行各业也都有自己的生财之道

<!-- more -->

qqqHERE WE GO!<br>

> Node.js 和 V8 之间的关系是什么？可以在没有 V8 的情况下运行 Node 吗？

首先 V8 是 JavaScript 的引擎，给 JavaScript 提供了一个良好的运行环境。得益于 V8 的性能，Node 才能大放异彩。这些都能在 Node 的历史中查阅到，那么没有 V8 还能运行 Node 吗，答案是可以的，只需要给 Node 提供足够的资源即可，比如让 Node 运行在 Windows 10 IoT Core。<br>

> 当你在任何一个 Node.js 文件中声明一个全局变量时，它对于所有模块都是真的全局吗？

这里的声明全局变量是和 JavaScript 的 var 比较的，原文其实已经告诉你答案了（how come），Node 每个文件都有自己的作用域，你在文件内通过 var 声明的全局变量只能用在该文件内，不过你可以像 JavaScript 的 window 一样给 global 赋值。<br>

> 当暴露一个 Node 模块的 API 时, 为什么我们有时候用 exports 有时候用 module.exports?