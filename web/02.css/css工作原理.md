# CSS 工作原理

> css 在浏览器中，主要执行的**加载、解析、渲染**三个阶段。

1. 加载阶段
  - 发起网络请求
  - 获取 css 文件
  - 并行下载： 浏览器通常使用并行下载的方式，同时请求多个资源，提高页面加载性能。(**浏览器通常使用多线程执行，并行下载是其中的一项优化策略**)


2. 解析阶段
  - 构建 CSSOM(Object Model): 浏览器开始构建 CSSOM，它是一个样式信息树的结构，包含了所有样式规则和其对应的层级关系。CSSOM 的构建是异步的，不会阻塞 HTML 解析。
  - 构建 DOM 树：在构建 CSSOM 的同时，浏览器还在构建 DOM 树，表示 HTML 文档的结构。DOM 树和 CSSOM 树将合并构成一个**渲染树(render tree)**。
  - 样式计算(Style Calculation): 浏览器根据 DOM 树和 CSSOM 树的结合来计算每个元素的最终样式。

3. 渲染阶段
  - 生成布局(Layout): 浏览器使用计算后的样式结果来生成布局，也就是确定每个DOM元素在页面上的位置和大小。此阶段也称为布局或回流(Reflow)。
  - 绘制(Painting): 浏览器使用生成的布局信息，将页面的每个元素绘制成像素。此阶段也称为绘制(Painting)。
  - 合成(Composite): 浏览器将绘制好的像素按照正确的顺序合成到页面上，形成最终渲染结果。此过程称为合成。


  ## CSSOM 构建过程
  > CSSOM 是表示样式信息的树状结构
  
  ### 它在浏览器中的构建过程如下:
  1. Tokenization(词法分析)
    - 将 CSS 代码解析成一个个的 token（标记）。
    - Token 是 CSS 语法的最小单元，包括选择器、属性、值等。
  2. Parsing(语法分析)
    - 将 token 转换为抽象语法树（Abstract Syntax Tree，AST）。
    - AST 是一种树状结构，表示了 CSS 语法的层次结构。
  3. 构造 CSSOM
    - 通过遍历 AST，构建 CSSOM。
    - 在 CSSOM 中，每个节点表示一个样式规则或样式声明。
  4. Cascade(重叠)
    - 对于每个元素，浏览器需要考虑多个样式来源（用户样式、作者样式、浏览器默认样式等）的层叠规则，决定最终生效的样式。
    - 层叠的结果是元素应用的最终样式规则。
  5. Computed Style(计算样式)
    - 将最终的样式规则转换为元素的计算样式。
    - 计算样式是一个键值对的集合，表示元素最终应用的样式属性及其值。

  ### CSSOM 数据结构类型

  常见数据结构类型包括:
  1. CSSStyleRule
    - 表示 CSS 样式规则
    - 包含选择器和声明块
    
  ```css
  p {
    color: red;
    font-size: 16px;
  }

  ```
  CSSOM 数据结构

  ```javascript
  {
    type: 'rule',
    selectorText: 'p',
    style: {
      color: 'red',
      fontSize: '16px'
    }
  }
  ```
  2. CSSMediaRule
    - 表示媒体查询规则，包含在 @media 块内的样式规则。
  ```css
  @media screen and (min-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
  ```
  CSSOM 数据结构
  ```javascript
  {
    type: 'media',
    media: 'screen and (min-width: 600px)',
    cssRules: [
      {
        type: 'rule',
        selectorText: 'body',
        style: {
          backgroundColor: 'lightblue'
        }
      }
    ]
  }
  ```


  ## 补充说明

  1. 重排与重绘: 布局和绘制的过程中，如果修改了元素的几何属性(大小、位置等信息)，会触发回流和重绘。
  - 回流（Reflow）： 当渲染树中的部分或全部元素的尺寸、结构或布局发生变化时，浏览器需要重新计算元素的几何属性，然后构建渲染树，这个过程就叫做回流。回流会导致性能开销，特别是在大型复杂的页面上。
  - 重绘（Repaint）： 当元素的样式发生改变，但不影响其布局时，浏览器只需重新绘制元素，而不需要重新计算其布局，这个过程叫做重绘。重绘的性能开销相对较小。

  2. 渲染优化
    - 避免使用复杂的选择器(避免增加样式匹配的计算成本)
    - 使用更具体的选择器，减少匹配元素的数量
    - 使用复用性高的类名，减少重复定义相似样式
    - 懒加载非必要样式，提高首屏加载速度
    - 利用 GPU 加速优化复杂样式和动画效果。通过 `transform` 和 `opacity` 实现硬件加速

```
具体来说，transform 属性主要用于实现元素的平移、旋转、缩放和倾斜等变换效果。当应用这些变换时，元素的位置和大小在屏幕上发生了变化，但这些变化对文档流没有影响，因此不会触发回流
```