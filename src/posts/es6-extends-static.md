---
title: ES6 关键字class、constructor、extends、static简介
date: 2018-12-24
tags: [JavaScript]
description: ES6 关键字class、constructor、extends、static简介
---

ES6 关键字class、constructor、extends、static简介

<!-- more -->
先来看下传统ES5的写法
```
// ES5写法 
function StdInfo() {
		this.name = "cat";
		this.age = 30;
}

StdInfo.prototype.getNames = function () {
    console.log("name：" + this.name);
}
//得到一个学员信息的对象
var p = new StdInfo()
p.getNames()
```
## 一、class 使用
实质:
   在类的实例中调用方法，其实就是调用原型上的方法。P = new Parent() P.constructor === Parent.prototype.constructor

注：
1.class定义类不存在变量提升，只能先定义类后使用，跟函数声明有区别的。\
2. 定义在类中的方法不需要添加function。\
3.函数的定义方式有函数声明和函数表达式两种，类的定义方式也有两种，分别是：类声明和类表达式。
4、表达式申明时候，class关键字之后的类名可有可无，如果存在，则只能在类内部使用\
5、方法之间不需要加逗号，否则会报错\
6、类必须使用new调用，否则会报错 (ES5 中可以直接调用)\
示例代码：
动态添加方法
```
Object.assign(Parent.prototype, {
	  getName() {
		  console.log('覆盖原来定义的')
	  }
})
```
```
// 表达式：
  const People = class StdInfo {
		    constructor(){
				console.log(StdInfo);  
			   // 这里可以打印出值，是一个函数
			}
			getName () { // 不需要添加function

		    }
}
// 声明：
class StdInfo { }
```

### 二、constructor
意义：类初始化时候执行的函数\
作用：初始化属性, 传入所需要的参数\
返回值：自动返回实例对象\
注意点：1、可以省略constructor ，一个类中只能有一个constructor函数，定义多个会报错\
2、继承时候super() 需要写在constructor里面调用，然后才能使用this
示例代码：\
```
class Parent {
	 constructor(name, age) {
		super(name, age) //初始化属性
		this.name = name // super 之前会报错， 应该写在super 之后
	}
}
```
### 三、继承 extends
   ES5继承原理： 实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Par继承ent.apply(this) ）。\
    ES6继承原理：质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。\

示例代码：
```
class Parent {
		constructor(name, age) {
				this.name = name;
				this.age = age;
		}
		getName() {
				console.log(this.name)
		}
}
class Child extends Parent {
		constructor(name, age) {
				super(name, age) //代表父类的构造函数
				this.name = name // super 之前会报错， 应该写在super 之后
		}
}
```
### 四、static 的使用

 解释：类其实就是实例的原型， 所有在类中定义的方法， 都会被实例继承，在new 一个实例后就可以直接使用类中的方法。如果在一个方法前， 加上static关键字,就表示这个方法不会被实例继承， 而是直接通过类来调用，及 "类名"+ '.' + "方法名" ， 这就称为“ 静态方法”。
    作用： 写工具 函数

使用方式：
    1、类中通过类名 直接调用 不能在实例后调用实例的方法。
```
class StuInfo {
		static staticMethodsParent() {
		  console.log('static 使用1 from 父类');
		}
}
StuInfo.staticMethodsParent()
```
2、子类可以调用父类的静态方法
```
class Parent {
		static staticMethodsParent() {
		  console.log('static 使用1 from 父类');
		}
}
class Child extends Parent {
        constructor() {
            super() // 不管是否有这个super，子类都可以获取到父类的静态方法
        }
		static staticMethodsChild() {
			console.log('static 使用2 from 子类');
		}
}

Child.staticMethodsChild() // static 使用2 from 子类'
Child.staticMethodsParent() // static 使用1 from 父类
```
3、 通过关键字this 使用 static 定义的方法
```
class StuInfo{
		constructor () {
				this.constructor.getStaticMethodsName()
		}
		static staticMethodsParent() {
				console.log('static 使用3 from 父类');
		}
}
StuInfo.staticMethodsParent()
```
4、 通过this 使用static 的第二种情况 ，在一个静态方法中 使用另一个静态方法,直接this.静态方法

```
class StuInfo {
			static staticMethodsParent1() {
				return "第一个静态方法返回值"
			}
			static staticMethodsParent2() {
			   console.log('第二个静态方法执行得到的结果：' + this.staticMethodsParent1())
			}
}
StuInfo.staticMethodsParent2()
```
5、通过super 调用父级的 静态方法
```
class Parent {
			static staticMethodsParent() {
				console.log('父级的 static ');
			}
	}

	class Child extends Parent {
			constructor () {
				super()
			}
			static staticMethodsChild() {
				console.log( super.staticMethodsParent())
			}
	}	
   Child.staticMethodsChild()
   ```





