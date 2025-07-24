# HTML 基础

## 对HTML语义化的理解？

> 语义化是指使用恰当语义的html标签，让页面具有良好的结构与含义.比如 p标签就代表段落，article 标签代表正文内容等等。

语义化的好处主要有两点：

- 开发者友好：使用语义类标签增强了可读性，开发者也能够清晰地看出网页的结构，也更为便于团队的开发和维护
- 机器友好：带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，语义类还可以支持读屏软件，根据文章可以自动生成目录


## script标签中defer和async的区别？

> defer 和 async 是用于控制. script 标签中脚本加载和执行行为的两个属性。它们的主要区别在于**脚本的执行时机**。


1. defer:

- defer 属性表示脚本在页面解析时不会中断，而是会被延迟到整个文档解析完毕后执行。
- 多个带有 defer 属性的脚本会按照它们在文档中出现的**顺序依次执行**。
- 这使得脚本能够在文档解析完成后统一执行，从而避免了可能的阻塞，同时也保证了执行顺序。

```js
<script defer src="script1.js"></script>
<script defer src="script2.js"></script>
```

2. async:

- async 属性表示脚本的加载和执行是异步的，不会阻塞文档的解析。
- 多个带有 async 属性的脚本的执行顺序**不受它们在文档中出现的顺序限制**，谁先加载完成就先执行谁。
- async 属性常用于独立的、不依赖其他脚本的情况。

```js
<script async src="script1.js"></script>
<script async src="script2.js"></script>
```

## 有几种前端储存的方式？

> cookies、localstorage、sessionstorage、ServiceWorker、IndexedDB

- Cookies（Cookie）:

Cookies 是在客户端存储数据的一种方式，它以键值对的形式存储在浏览器中。
有大小限制，每个域名下的 Cookies **总大小限制为4KB**。
会在每次 HTTP 请求中被发送到服务器，因此可能会影响性能。

- Web Storage:

Web Storage 提供了两种存储方式：localStorage 和 sessionStorage。
  1. localStorage 存储的数据没有过期时间，会一直保存在浏览器中。
  2. sessionStorage 存储的数据在**会话结束（关闭标签页或浏览器）时**被清除。

- IndexedDB:

IndexedDB 是一种客户端数据库，提供了比 Web Storage 更强大的存储和检索功能。
允许异步操作，适用于大量、复杂的数据存储需求。
通常用于存储大量结构化数据，支持事务操作。


- Service Workers:

Service Workers 是一个独立于页面的 JavaScript 线程，用于拦截和处理网络请求。
可以用于创建离线应用、推送通知等功能。

- Cache Storage:

Cache Storage 是用于存储缓存资源的 API，通常与 Service Workers 结合使用。
用于存储离线应用的资源，提高应用的性能和访问速度。
