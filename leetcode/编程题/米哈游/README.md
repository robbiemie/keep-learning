1. BFC
1. 实现如下布局

```html
o 
    o
        o
```

```html
o   o   o
```
1. typeof 原理，局限性
1. instanceOf 原理
1. Array instanceOf Array
1. [] instanceOf Object
1. 说出执行结果

```js
setTimeout(() => {
    console.log('1')
    Promise.resolve().then(() => {
        console.log('2')
    })
})

console.log('3')
Promise.resolve().then(() => {
    console.log('4')
    setTimeout(() => {
        console.log('5')
    })
})

```
1. 说出执行结果

```js

function double (x) {
    return new Promise(resolve=> {
        setTimeout(() => {
            resolve(x * 2)
        })
    })
}

function test() {
    const nums = [1,2,3]
    nums.forEach(async item => {
        const res = await double(item)
        console.log(res)
    })
}
```

1. v-for 和 v-if 连用，优先级
1. v-model 实现原理
1. .sync 语法
1. slot 用法
1. vue的异步组件
2. 懒加载
3. 动态组件
4. keep-alive 原理
4. 双向绑定的原理
5. template 如何解析执行的
5. vue 生命周期函数
5. 父子组件生命周期函数调用执行顺序
6. webpack 优化手段
7. happy pack 底层原理
7. package.json.lock 文件作用
7. 浏览器缓存