1. 输出运算结果

```js

var a = 0, b = 0

function A(a) {
    A = function B(b) {
        console.log(a)
        console.log(b)
        console.log(a+b++)
    }
    console.log(a++)
}

A(1) // 1
A(2) // 4 (=2+2)

```

2. css

```html
<style>
    #a {
        font-size: 10px;
    }
    #b {
        font-size: 11px;
    }
    div p {
        font-size: 12px;
    }
    div .c {
        font-size: 13px;
    }
    .a .b .c {
        font-size: 14px;
    }
    #c {
        font-size: 18px;
    }
    #a #b .c {
        font-size: 15px;
    }
    #a .b #c {
        font-size: 16px;
    }
    .a #b #c {
        font-size: 17px;
    }
</style>

<div id="a" class="a">
    <div id="b" class="b">
        <p id="c" class="c">I`m here</p>
    </div>
</div>
```

3. JS 事件循环

```js
async function async1 () {
    console.log(1)
    await async2()
    console.log(2)
}

async function async2() {
    console.log(3)
}

console.log(4)

setTimeout(() => {
    console.log(5)
})

async1()

new Promise(function(resolve => {
    console.log(6)
    resolve()
})).then(res => {
    console.log(7)
})

console.log(8)
```

4. 博弈论

一共有100颗棋子，如何能保证我必胜

- 规则1. 我先手
- 规则2. 每次最多1-5颗棋子
- 规则3. 先抓完获胜

思路:

```js
设 n 为最大获取的棋子数，总棋子数为 t

余数: value = t % (1+n)

1. 先拿掉余数
2. 然后对方先拿x
3. 接着己方拿去的个数为 (1+n) - x
4. 重复2，3步骤
```

5. 如何用 js 模拟， ts enum 枚举类型

```ts
enum E {
    'A'
}
// E['A'] === 0
// E[0] === 'A'
```

```js
const Direction = {
  'UP': 0,
  'DOWN': 1,
  'LEFT': 2,
  'RIGHT': 3,
};

// 创建反向映射
const DirectionReverse = {};
Object.keys(Direction).forEach(key => {
  DirectionReverse[Direction[key]] = key;
});

Object.keys(Direction).forEach(key => {
  const value = Direction[key]
  Object.defineProperty(Direction, key, {
    get() {
      return value
    }
  })
})

Object.keys(DirectionReverse).forEach(key => {
  const value = DirectionReverse[key]
  Object.defineProperty(Direction, key, {
    get() {
      return value
    }
  })
})

// 使用枚举和反向映射
console.log(Direction[0]); // 输出 'UP'
console.log(Direction['UP']); // 输出 '0'
```

6. package.json 中 ~、^ 是什么含义

- ~: 匹配最近的小版本依赖包	(~1.1.0: >=1.1.0 && <1.2.0)
- ^: 匹配最新的大版本依赖包	(^1.1.0: >=1.1.0 && <2.0.0; ^0.1.0: >=0.1.0 && <0.2.0)


7. 实现一个 promise.allSettle 方法
