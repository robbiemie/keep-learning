# Javascript

## 原型、原型链

> 原型(prototype): 一个简单的对象，用于实现对象的属性继承。可以简单的理解成对象的父节点。

### prototype

> 在JavaScript中，每个函数都有一个prototype属性，这个属性指向函数的原型对象。

![Alt text](./images/01.png)

### __proto__

> 这是每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。


```js
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

![Alt text](./images/02.png)

### constructor


在 Firefox 和 Chrome 中，每个JavaScript对象中都包含一个__proto__ (非标准)的属性指向它的父节点(该对象的原型)，可obj.__proto__进行访问。

- 构造函数: 可以通过 `new` 来新建一个对象的函数。
- 实例: 通过构造函数和new创建出来的对象，便是实例。


实例通过__proto__指向原型，通过constructor指向构造函数。

```
function Person() {

}
console.log(Person===Person.prototype.constructor)  //true
```

`Object.hasOwnProperty()` 方法返回一个布尔值，判断对象是否包含特定的自身（非原型对象上的）属性。

可以根据上面的方法，判断对象的属性是自身属性还是原型上的属性

```js
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```

```js
function Person() {

}
var person = new Person();
console.log(person.constructor === Person); // true
person.constructor === Person.prototype.constructor // true
```

![image.png](./images/03.png)


### 实例与原型

>  当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

```js
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```


### 原型的原型

我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：

```js
var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin
```

其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 __proto__ 指向构造函数的 prototype

![Alt text](./images/04.png)


### 原型链

> 每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。


Object.prototype 的原型呢？

```js
console.log(Object.prototype.__proto__ === null) // true
```

示意图如下

![Alt text](./images/05.png)