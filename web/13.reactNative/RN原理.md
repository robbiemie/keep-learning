# ReactNative

React Native 是一个由 Facebook 开发的开源框架，允许开发者使用 JavaScript 和 React 来开发原生移动应用。它的主要目标是使开发者能够用同一套代码库就能够开发出既能在 iOS 上运行也能在 Android 上运行的应用，从而提高开发效率和降低维护成本。

## 核心原理

1. JavaScript 线程：React Native 应用的业务逻辑主要在 JavaScript 线程上运行。这意味着应用的 UI（由 React 组件构成）和大部分逻辑都是用 JavaScript 编写的，并在这个独立的线程上执行。
2. 原生模块和视图：尽管逻辑是用 JavaScript 写的，但 React Native 通过原生模块和视图提供了丰富的原生性能和用户体验。这些原生模块和视图由 Objective-C、Swift（对于 iOS）或 Java、Kotlin（对于 Android）编写，允许 React Native 调用原生 API 和组件。
3. 桥接（Bridge）：React Native 通过一个称为“桥接”的系统来沟通 JavaScript 线程和原生线程。当在 JavaScript 中调用原生模块的功能（例如，访问设备的相机）或需要渲染原生视图组件时，JavaScript 代码会通过桥接向原生端发送指令。同样，原生事件（如用户的触摸操作）也会通过桥接发送回 JavaScript 线程。
4. 声明式 UI：React Native 采用 React 的声明式 UI 编程范式，允许开发者以声明方式构建应用的 UI。这意味着开发者只需声明应用在不同状态下的界面长什么样，React Native 负责渲染并在数据变化时更新 UI。
5. 热重载（Hot Reloading）和热更新（Hot Updating）：React Native 支持热重载和热更新功能，允许开发者在代码改动后，无需重新编译整个应用就能立即在设备或模拟器上看到更新。这极大提高了开发效率。
6. 组件化和代码重用：React Native 强调组件化开发，使得代码易于管理和复用。此外，开发者可以共享大部分业务逻辑和组件代码，实现 iOS 和 Android 平台之间的代码重用。

## 特性

1. 跨平台开发：使用 React Native，开发者可以用一套代码开发 iOS 和 Android 应用，极大地提升了开发效率。
2. 热重载（Hot Reload）：这一特性允许开发者在应用运行时实时看到代码更改的效果，无需重新编译整个应用。
3. 原生组件：React Native 提供了一套封装良好的原生组件，如视图（View）、文本（Text）和图像（Image），使得开发的应用看起来和感觉都像原生应用。
4. JavaScript 和原生代码的互操作：如果需要，开发者可以在项目中添加原生模块，使 JavaScript 代码能够调用原生功能，反之亦然。

## 开发流程

1. 环境搭建：首先需要设置开发环境，包括 Node.js、React Native 命令行工具等。
2. 创建项目：通过 React Native CLI 或 Expo CLI 创建新项目。
3. 编写代码：使用 JavaScript 和 React 编写应用逻辑和界面，利用 React Native 提供的组件和 API。
4. 调试和测试：使用热重载快速迭代，利用 Chrome 或其他工具进行调试，同时进行设备或模拟器上的测试。
5. 构建和发布：对应用进行构建，生成可在设备上安装的包，并发布到 App Store 或 Google Play。

## 与 React 的区别

1. 平台：React 用于构建网页应用，而 React Native 用于构建原生移动应用。
2. 组件：React 使用 HTML 和 CSS 构建界面，而 React Native 使用原生组件和样式表（StyleSheet）。
3. 导航：移动应用常用的导航模式（如栈导航、标签导航）在 React Native 中通过专门的库（如 React Navigation）实现，而不是使用 Web 的路由库。