// 实现一个 EventEmit 类
class EventEmit {
    on() {}
    once() {}
    off() {}
    emit() {}
}


// 实现一个 EventEmit 类
class EventEmit {
  constructor() {
    this.eventMap = {}
  }
  on(name, handler) {
    if(Array.isArray(this.eventMap[name]))  this.eventMap[name] = []
    if(typeof handler === 'function') {
      this.eventMap[name].push(handler)
    }
  }
  once(name, handler) {
    if(Array.isArray(this.eventMap[name]))  this.eventMap[name] = []
    handler.once = true
    if(typeof handler === 'function') {
      this.eventMap[name].push(handler)
    }
  }
  off(name, handler) {
    if(Array.isArray(this.eventMap[name]))  this.eventMap[name] = []
    const queue = this.eventMap[name];
    const index = queue.findIndex(item => item === handler);
    queue.splice(index, 1);
    this.eventMap[name] = queue
  }
  emit(name, ...args) {
    if(Array.isArray(this.eventMap[name]))  this.eventMap[name] = []
    const queue = this.eventMap[name];
    for(let handler of queue) {
      if(typeof handler === 'function') {
        handler(args)
      }
      if(handler.once) {
        handler = null
      }
    }
    this.eventMap[name] = queue.filter(item => item)
  }
}
