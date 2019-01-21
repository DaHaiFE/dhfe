---
title: JS数组方法总结
date: 2019-01-20
tags: [JavaScript]
description: Array对象用于在单个的变量中存储多个值。
---

Array对象用于在单个的变量中存储多个值。

<!-- more -->

## 一、Javascript中创建数组的两种方式

#### 1. 使用Array构造函数创建数组

  ```
  var arr1 = new Array(); // 创建一个空数组
  var arr2 = new Array(10); // 创建一个包含10项的数组`
  var arr3 = new Array("张三","李四","王五"); // 创建一个包含3个字符串的数组
  ```

#### 2. 使用数组字面量表示法创建数组

  ```
  var arr4 = []; // 创建一个空数组
  var arr5 = [10]; // 创建一个包含3项的数组`
  var arr6 = ["张三","李四","王五"]; // 创建一个包含3个字符串的数组
  ```

## 二、数组的原型方法

数组的方法有数组原型方法，也有从object对象继承来的方法，在此只介绍数组的原型方法。

#### 1. join()

join(separator): 将数组的元素组成一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。

  ```
  var arr = [1,2,3,4];
  console.log(arr.join()); // 1,2,3,4
  console.log(arr.join("-")); // 1-2-3-4
  ```

通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串，函数如下：

```
function repeatString (str , n) {
  return new Array(n + 1).join(str);
}
console.log(repeatString('abc', 3)); // abcabcabc
```

#### 2. push()和pop()

push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。
<br/> 
pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。

```
var arr = ["Lily", "Lucky" , "Tom"]
var count = arr.push("Jack", "Xbetty");
console.log(count); // 5
console.log(arr); // ["Lily", "Lucky" , "Tom" , "Jack", "Xbetty"]
var item = arr.pop();
console.log(item); // Xbetty
console.log(arr); // ["Lily", "Lucky" , "Tom" , "Jack"]
```

#### 3. shift()和unshift()

shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 
<br/>
unshift:将参数添加到原数组开头，并返回数组的长度 。
这组方法和上面的push()和pop()方法正好对应，一个是操作数组的开头，一个是操作数组的结尾。

```
var arr = ["Lily", "Lucky" , "Tom"]
var count = arr.unshift("Jack", "Xbetty");
console.log(count); // 5
console.log(arr); // [ "Jack", "Xbetty", "Lily", "Lucky" , "Tom"]
var item = arr.shift();
console.log(item); // Jack
console.log(arr); // ["Xbetty", "Lily", "Lucky" , "Tom"]
```

> Array的push与unshift方法性能比较分析

从原理就可以知道，unshift的效率是较低的。原因是，它每添加一个元素，都要把现有元素往下移一个位置。unshift比push要慢差不多100倍！
<br/>
Array有一个叫做reverse的方法，能够把一个数组反转。先把要放进数组的元素用push添加，再执行一次reverse，就达到了unshift的效果。
<br/>
reverse性能极高，甚至于没有额外的消耗，可以放心使用。

#### 4. sort()

sort()：按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。
<br/>
在排序时，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值， sort()方法比较的也是字符串，因此会出现以下的这种情况：

```
var arr1 = ["a","b","c","d"]
console.log(arr1.sort()); // ["a","b","c","d"]
var arr2 = [13, 24, 51 ,3]
console.log(arr2.sort()); // [13, 24, 3, 51]
console.log(arr2); // [13, 24, 3, 51] （原数组被改变）
```

为了解决上述问题，sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。
<br/>
比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，如果第一个参数应该位于第二个之后则返回一个正数。
<br/>
以下就是一个简单的比较函数：

```
function compare(value1, value2) {
  if(value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
arr2 = [13, 24, 51 ,3];
console.log(arr2.sort(compare)); // [3, 13, 24, 51]
```

如果需要通过比较函数产生降序排序的结果，只要交换比较函数返回的值即可：

```
function compare(value1, value2) {
  if(value1 < value2) {
    return 1;
  } else if (value1 > value2) {
    return -1;
  } else {
    return 0;
  }
}
arr2 = [13, 24, 51 ,3];
console.log(arr2.sort(compare)); // [51, 24, 13, 3]
```

#### 5. reverse()

reverse()：反转数组项的顺序。

```
var arr = [1,2,3,4];
console.log(arr.reverse()); // [4,3,2,1]
console.log(arr); // [4,3,2,1]（原数组改变）
```

#### 6. concat()

concat() ：将参数添加到原数组中。
<br/>
这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。
<br/>
在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。

```
var arr = [1,2,3,4];
var arrCopy1 = arr.concat(5,6,[7,8])
console.log(arrCopy1); // [1,2,3,4,5,6,7,8]
console.log(arr); // [1,2,3,4]（原数组未改变）
```

> 从上面测试结果可以发现：传入的不是数组，则直接把参数添加到数组后面，如果传入的是数组，则将数组中的各个项添加到数组中。但是如果传入的是一个二维数组呢？

```
var arrCopy2 = arr.concat([5,6,[7,8]])
console.log(arrCopy2); // [1,2,3,4,5,6,Array[2]]
console.log(arrCopy2[6]); // [7,8]
```

上述代码中，arrCopy2数组的第六项是一个包含两项的数组，也就是说concat方法只能将传入数组中的每一项添加到数组中，如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy2中。

#### 7. slice()

slice()：返回从原数组中指定开始下标到结束下标之间的项组成的新数组。
<br/>
slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。

```
var arr = [1,2,3,4,5,6];
var arrCopy1 = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);
var arrCopy4 = arr.slice(-4,-1);
console.log(arr); // [1,2,3,4,5,6]（原数组不变）
console.log(arrCopy1); // [2,3,4,5,6]
console.log(arrCopy2); // [2,3,4]
console.log(arrCopy3); // [2,3,4]
console.log(arrCopy4); // [3,4,5]
```

arrCopy1只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。 
arrCopy2设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。 
arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从1开始到4（不包括）的子数组。 
arrCopy4中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,5)。

#### 8. splice()

splice()：很强大的数组方法，它有很多种用法，可以实现删除、插入和替换。
<br/>
删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。
<br/>
插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
<br/>
替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。
<br/>
splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。

```
var arr = [1,2,3,4,5,6];
var arrRemoved1 = arr.splice(0,2);
console.log(arr); // [3,4,5,6]
console.log(arrRemoved1); // [1,2]
var arrRemoved2 = arr.splice(2,0,4,6);
console.log(arr); // [3,4,4,6,5,6]
console.log(arrRemoved2); // []
var arrRemoved3 = arr.splice(1,1,2,9);
console.log(arr); // [3,2,9,4,6,5,6]
console.log(arrRemoved3); // 4
```

#### 9. indexOf和lastIndexOf()

indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。 
<br/>
lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。
<br/>
这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回1。在比较第一个参数与数组中的每一项时，会使用全等操作符。

```
var arr = [1,2,3,4,4,3,2,1];
console.log(arr.indexOf(3)); // 2
console.log(arr.lastIndexOf(3)); // 5
console.log(arr.indexOf(3,2)); // 2
console.log(arr.lastIndexOf(3,4)); // 2
console.log(arr.indexOf("1")); // -1
```


#### 10. forEach()

forEach()：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。
参数都是function类型，默认有传参，参数分别为：遍历的数组内容；第对应的数组索引，数组本身。

```
var arr = [1,2,3,4];
arr.forEach(function(x,index,a){
  console.log(x+'|'+index+'|'+(a ===arr));
});
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
```

#### 11. map()

map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
<br/>
下面代码利用map方法实现数组中每个数求平方。

```
var arr = [1,2,3,4];
var arr2 = arr.map(function(item){
  return item*item;
});
console.log(arr2); // [1,4,9,16]
```

#### 12. filter()

filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。

```
var arr = [1,2,3,4,5,6];
var arr2 = arr.filter(function(x,index){
  return index % 2 === 0 || x > 5
});
console.log(arr2); // [1,3,5,6]
```

#### 13. every()

every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。

```
var arr = [1,2,3,4,5,6];
var arr2 = arr.every(function(x){
  return x < 10;
});
console.log(arr2); // true
var arr3 = arr.every(function(x){
  return x < 3;
});
console.log(arr3); // false
```

#### 14. some()

some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。

```
var arr = [1,2,3,4,5,6];
var arr2 = arr.some(function(x){
  return x < 3;
});
console.log(arr2); // true
var arr3 = arr.every(function(x){
  return x < 1;
});
console.log(arr3); // false
```
#### 15. reduce()和reduceRight()

这两个方法都会实现迭代数组的所有项，然后构建一个最终返回的值。
<br/>
reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。
<br/>
这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。
<br/>
传给 reduce()和 reduceRight()的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。
<br/>
下面代码用reduceRight()实现数组求和，数组一开始加了一个初始值10。
```
var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev,cur,index,array){
  return prev + cur;
},10);
console.log(sum); // 25
```

## 三、检测数组

对于单一的全局执行环境而言，使用instanceof操作符就可以检测是否为数组，例如：

  ```
  var arr = new Array("张三","李四","王五");
  console.log(arr instanceof Array); // true
  ```

但如果网页中包含多个框架，也就包含多个全局执行环境，则使用Array.isArray()方法来确定某个值是否为数组，而不管它是在哪个全局环境中被创建的。如下：

 ```
  if(Array.isArray(arr)){
    // 执行某些操作
  }
  ```

每个对象都具有toLocaleString()、toString()和valueof()方法。调用数组的toString()方法会返回数组中每个值的字符串形式拼接而成并且以逗号分隔的字符串，调用数组的valueof()方法返回的还是数组，实际上调用的是数组每一项的toString()方法，如下：

 ```
  var arr = ["red","blue","green"];
  console.log(arr.toString()); // red,blue,green
  console.log(arr.valueOf()); // ["red", "blue", "green"]
  console.log(arr); // ["red", "blue", "green"]
  ```

  而调用数组的toLocaleString()方法，与toString()不同的是它会调用数组每一项的toLocaleString()方法，将每一项toLocaleString()方法的返回值以逗号分隔拼接成一个字符串。而使用join()方法，可以使用不同的分隔符来构建这个字符串，如下：
  
 ```
  var arr = ["red","blue","green"];
  console.log(arr.toLocaleString()); // red,blue,green
  console.log(arr.join(',')); // red,blue,green
  ```

## 四、伪数组

#### 伪数组的定义
1. 拥有length属性，其它属性（索引）为非负整数（对象中的索引会被当作字符串来处理，这里你可以当做是个非负整数串来理解）
2. 不具有数组所具有的方法

常见的参数的参数arguments，DOM对象列表（比如通过document.getElementsByTags得到的列表），jQuery对象（比如$('div'）都是伪数组。
<br/>
> 伪数组，就是像数组一样有length属性，也有0，1，2，3等属性的对象，看起来就像数组一样，但不是数组。
<br/>
伪数组是一个Object，而真实的数组是一个Array。

#### 伪数组转数组的方法
1. 方法一：遍历伪数组，再把值push进空数组中
2. 方法二：声明一个空数组，通过遍历伪数组把它们重新添加到新的数组中（与方法一类似）
  
 ```
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
  ```
  ```
  var aLi = document.querySelectorAll('li');
  var arr = [];
  for (var i = 0; i < aLi.length; i++){
    arr[arr.length] = aLi[i].innerHTML;
  }
  console.log(arr); // ["1", "2", "3", "4"]
  ```

3. 方法三：使用ES6中数组的新方法Array.from()

```
  function test(){
    var arg = Array.from(arguments);
    arg.push(5);
    console.log(arg); // [1, 2, 3, 4, 5]
  }
  test(1,2,3,4)
  ```

4. 方法四：使用Array.prototype.slice.call()或者[].slice.call()

```
var arr = Array.prototype.slice.call({
  0:"like",
  1:12,
  2:true,
  length:3
});
 console.log(arr); // ["like", 12, true]
  ```
  