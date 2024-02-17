// bundle/main.js
(() => {
  // webpackBootstrap
  // 1.定义一个 webpackBootstrap 立即执行函数（IIFE）
  // 作用：定义所有模块的定义和加载逻辑(结构: 加载路径+对应的加载函数)
  "use strict";
  var __webpack_modules__ = {
    /***/ "./webpack.moduleA.js":
      /*!****************************!*\
  !*** ./webpack.moduleA.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          `__webpack_require__.r(__webpack_exports__);  // 定义 esm
          /* harmony export */ 
          __webpack_require__.d(__webpack_exports__, {  // exports 对象挂载 greeting 方法
            /* harmony export */   
            greeting: () => (/* binding */ greeting)
            /* harmony export */ 
          });
            const greeting = 'Hello';
            //# sourceURL=webpack:///./webpack.moduleA.js?`
        );
        /***/
      },

    /***/ "./webpack.moduleB.js":
      /*!****************************!*\
    !*** ./webpack.moduleB.js ***!
    \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          `__webpack_require__.r(__webpack_exports__);
          /* harmony import */ 
          var _webpack_moduleA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpack.moduleA.js */ "./webpack.moduleA.js"); // 加载 moduleA
          console.log(_webpack_moduleA_js__WEBPACK_IMPORTED_MODULE_0__.greeting, "World!");
          //# sourceURL=webpack:///./webpack.moduleB.js?`
        );

        /***/
      },
  };
  /************************************************************************/
  // 2. 定义模块加载缓存（避免重复加载相同模块）
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    // 定义模块对象(结构: {exports: {} })
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /************************************************************************/
  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    /**
     * 将模块导出的属性或方法，挂载到 exports 对象上
     * @param {*} exports
     * @param {*} definition
     */
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          // 判断条件
          // 1. key 在 definition 对象上是否存在 &&
          // 2. key 还未挂载到 exports 对象上
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          // 将 key 挂载到 exports 对象上
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    /**
     * 这个函数通常用于检查对象是否具有某个导出属性，以确定模块是否加载成功
     * @param {*} obj 待检查的对象
     * @param {*} prop 待检查对象的属性
     * @returns
     */
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    /**
     *
     * 辅助函数
     * 作用: 给 __webpack_exports__ 添加一个 __esModule 为 true 的属性，表示这是一个 ES6 module
     * @param {*} exports 
     */
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  /************************************************************************/

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__("./webpack.moduleB.js");
})();