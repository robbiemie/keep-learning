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

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

1. width=device-width:

`width=device-width` 意味着浏览器视口的宽度将等于设备的宽度。也就是说，网页的宽度会根据设备的宽度进行调整，以确保网页在移动设备上能够正常显示。

2. initial-scale=1.0:

`initial-scale=1.0` 表示页面的初始缩放级别为 1.0。这是为了确保在加载页面时，页面不会被自动缩放。设置为 1.0 时，页面以正常大小显示，不进行缩放。

### 名词解释

1. 分辨率(1334pt x 750pt)
> 指的是屏幕上垂直有1334个物理像素，水平有750个物理像素。

2. 屏幕尺寸(4.7in)

> 注意英寸是**长度单位，不是面积单位**。4.7英寸指的是屏幕对角线的长度，1英寸等于2.54cm。

3. 屏幕像素密度(326ppi)

> 指的是每英寸屏幕所拥有的像素数，在显示器中，dpi=ppi。dpi强调的是每英寸多少点。同时，屏幕像素密度=分辨率/屏幕尺寸


4. 设备独立像素
> 设备独立像素，不同于设备像素（物理像素），它是虚拟化的。比如说css像素，我们常说的10px其实指的就是它。需要注意的是，物理像素开发者是无法获取的，它是自然存在的一种东西，该是多少就是多少。

5. 设备像素比(缩写简称dpr)
> 也就是我们经常在谷歌控制台移动端调试顶端会看到的一个值。设备像素比 = 设备像素 / css像素（垂直方向或水平方向）。可以通过JS来获取：window.devicePixelRatio