1. 除了 localStorage 还有哪些缓存

- cookie
    - 如果不设置有效期，生命周期是会话级别的，如果设置有效期，那么数据会保留在磁盘上，有效期过后，就会清空
    - cookie 每次都会被请求带上，发送给服务端
    - 大小 4kb
- localStorage
    - 所有同源的标签页共享之间数据
    - 重启浏览器之后，重新进入页面还是会存在，生命周期是永久的
    - 更新可以通过 `storage` 事件监听
    - 大小 5mb
- sessionStorage
    - 仅限于当前标签页中使用
    - 刷新页面后，数据仍然保留；重启浏览器之后，数据清空
    - 更新可以通过 `storage` 事件监听
    - 大小 5mb
- indexDB
- webSQL

2. Servicework

> Serviceworker 是一个在指定资源路径下的事件驱动 worker 线程。主要的目的
就是要控制页面，拦截并修改访问和资源请求。

serviceworker 不能访问 DOM，他有自己独立的上下文环境 seft，它运行在其他线程中，因此，不能阻塞主进程的执行。

- isntalling
- isntalled
- activating
- activated

其他使用场景

- 离线缓存
- 后台数据同步
- 响应来自其它源的资源请求
- 运行计算量大的操作，比如地理位置信息等


3. 都有哪些场景会触发跨域问题

- 由 xhr 或者 fetch 发起的跨站请求
- web font 使用跨站字体
- 在 canvas 中使用 drawImage 方法

4. 如何计算请求耗时

- navigation
- redirect
- domainLookUp
- connect
- request
- response
- domLoading
- domInterative
- domContentLoadedEvent
- domComplete


```js
requestTime = window.performance.timing.responseEnd - window.performance.timing.requestStart
```
