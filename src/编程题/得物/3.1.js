/*********************第 3 题********************** 
 * 实现⼀个异步任务处理函数，函数第⼀个参数asyncTasks代表需要处理的任务列表， 
 * 第⼆个参数n代表可以同时发起的任务数。所有任务完成后把处理结果按顺序放在数组⾥返回 
 * ⼊参格式参考: 
 const asyncTask1 = () => new Promise((resolve) => setTimeout(() => { console.log('resolve task 1'); resolve(); }, 1000)) 
 const asyncTask2 = () => new Promise((resolve) => setTimeout(() => { console.log('resolve task 2'); resolve(); }, 2000)) 
 const asyncTask3 = () => new Promise((resolve) => setTimeout(() => { console.log('resolve task 3'); resolve(); }, 2000)) 
 const asyncTasks = [asyncTask1, asyncTask2, asyncTask3] 
 handleAsyncTasks(asyncTasks, 2) 

 * // 等待1s 
 * // > resolve task 1 
 * // 等待1s 
 * // > resolve task 2 
 * // 等待1s 
 * // > resolve task 3 */

function handleAsyncTasks(asyncTasks, n) {
  /*** 此处写代码逻辑 */
  let limit = n;
  let tasks = asyncTasks || [];
  let pool = []; // 缓存池

  function addTask() {
      if(tasks.length === 0) return
      let task = tasks.shift();
      let promise = task();
      pool.push(promise);
      return promise;
  }

  function deleteTask(promise) {
    promise.then((_) => {
        pool.splice(pool.indexOf(promise), 1);
      });
  }


  // 先将缓存池塞满
  while (tasks.length > 0 && pool.length < limit) {
    let promise = addTask();
    deleteTask(promise)
  }
  
  const race = Promise.race(pool);
  race.then((_) => {
    if (tasks.length === 0) return;
    let promise = addTask();
    deleteTask(promise)
  });
}

const asyncTask1 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("resolve task 1");
      resolve();
    }, 1000)
  );
const asyncTask2 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("resolve task 2");
      resolve();
    }, 2000)
  );
const asyncTask3 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("resolve task 3");
      resolve();
    }, 2000)
  );
const asyncTasks = [asyncTask1, asyncTask2, asyncTask3];
handleAsyncTasks(asyncTasks, 2);
