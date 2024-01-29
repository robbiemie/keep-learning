# CSS 基础

## 1.块级格式化上下文(Block Formatting Context: BFC)

> 用于描述一个独立的块级渲染上下文。规定内部块级元素是如何布局，并不影响外部块级区域。

1. 定义：

- BFC 是一个独立的渲染区域，规定了内部块级元素如何布局，并且与区域外部毫不相干。
- BFC 区域内的元素布局不受外部影响，同时 BFC 区域与外部元素之间的垂直边距不会重叠。

2. 触发 BFC 的条件：

- 根元素（`<html>`）是一个默认的 BFC。
- 浮动元素：元素的 float 不为 none。
- 绝对定位元素：元素的 position 属性为 absolute 或 fixed。
- display 属性为 `inline-block`、`flex`、`grid`。
- overflow 值不是 `visible` 或者 `clip` 的块级元素。
- 包含块为 BFC。

3. BFC 的特性：

- 内部的块级盒子会在垂直方向上一个接一个地放置。
- margin 折叠（margin collapsing）：BFC 的两个相邻块级盒子的垂直外边距可能会发生折叠。
- BFC 区域不会与浮动元素重叠。
- BFC 可以包含浮动的元素，确保浮动元素不会溢出到 BFC 区域之外。
- BFC 区域的块级盒子在布局时，会忽略浮动元素的影响。

4. 应用场景：

- 解决 margin 折叠问题。

```html
<style>
  .container {
    overflow: hidden; /* 使用 overflow 属性阻止外边距折叠 */
    display: flow-root; /* 创建 BFC */
  }

  .element1, .element2 {
    margin-bottom: 20px;
  }
</style>
```

- 避免浮动元素引起的布局问题。

```html
<div class="container">
  <div class="left-column">
    <!-- 左侧内容 -->
    <p>Left Column</p>
  </div>
  <div class="right-column">
    <!-- 右侧内容 -->
    <p>Right Column</p>
    <p>Content in the right column can expand to fill the available space.</p>
  </div>
</div>

<style>
  .container {
    display: flex;
  }

  .left-column {
    width: 200px; /* 左侧固定宽度 */
    background-color: #e0e0e0;
  }

  .right-column {
    flex: 1; /* 右侧自适应宽度 */
    background-color: #f0f0f0;
  }
</style>
```

- 创建一个独立的环境，使得内部元素不受外部的影响，有助于清除浮动。

```html
<div class="clearfix">
  <div class="float-left">
    <!-- 左侧内容 -->
    <p>Left Column</p>
  </div>
  <div class="float-right">
    <!-- 右侧内容 -->
    <p>Right Column</p>
    <p>Content in the right column can expand to fill the available space.</p>
  </div>
</div>

<style>
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }

  .float-left {
    float: left;
    width: 50%; /* 左侧元素宽度为父容器的一半 */
    background-color: #e0e0e0;
  }

  .float-right {
    float: left;
    width: 50%; /* 右侧元素宽度为父容器的一半 */
    background-color: #f0f0f0;
  }
</style>

```

- 实现两栏布局中，左侧固定宽度，右侧自适应宽度的效果。
```html
<div class="container">
  <div class="left-column">
    <!-- 左侧内容 -->
    <p>Left Column</p>
  </div>
  <div class="right-column">
    <!-- 右侧内容 -->
    <p>Right Column</p>
    <p>Content in the right column can expand to fill the available space.</p>
  </div>
</div>

 <style>
  .container {
    overflow: hidden; /* 触发 BFC */
  }

  .left-column {
    width: 200px; /* 左侧固定宽度 */
    float: left;  /* 浮动 */
    background-color: #e0e0e0;
  }

  .right-column {
    margin-left: 200px; /* 左侧宽度 */
    background-color: #f0f0f0;
  }
</style>
```

## 2. 移动端适配

- [前端移动端适配总结](https://segmentfault.com/a/1190000011586301#articleHeader2)

