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

### 适配方案

link: https://juejin.cn/post/6844903630655471624

1. 媒体查询@media, 不同设备维护不同样式

```css
@media screen and (max-width: 960px){
    body{
      background-color:#FF6699
    }
}
```

2. 百分比布局

```html
<div class="parent">
  <div class="child"></div>
</div>

<style>
   .father{ width:200px; height:100px; } .child{ width:50%; height:50%; } 
</style>
```

- rem

> rem单位都是相对于根元素html的font-size来决定大小的.

根元素的font-size相当于提供了一个基准，当页面的size发生变化时，只需要改变font-size的值，那么以rem为固定单位的元素的大小也会发生响应的变化。

因此，如果通过rem来实现响应式的布局，只需要根据视图容器的大小，动态的改变font-size即可.

- vw, vh: 将视觉视口宽度 window.innerWidth和视觉视口高度 window.innerHeight 等分为 100 份。1px * 375 = 100vw即 1px = 100vw / 375.

- Flexible方案: 使用rem模拟vw,vh. 将设备宽度分为10份(假设为750px, 一份就是75px, 因为分为100份的花一份为7.5px设置为跟字体的话字很小看不清), 即1rem = 设备宽度 / 10

## 层叠, 优先级, 继承

### 层叠
1. 优先级相同, 选择器相同，后面的样式覆盖前面的.
2. 优先级高的覆盖优先级低的. 权重: 内联样式 1000 id100 类选择器,属性选择器,伪类 10 元素选择器,伪元素 1
3. 特定属性无视优先级: 特定属性设置!important(覆盖 !important 唯一的办法就是另一个 !important 具有 相同优先级 而且顺序靠后，或者更高优先级。)

### 继承: 部分 css 属性可以继承父元素的
1. 可以继承的属性: color, font-size 等
2. 控制继承: inherit -> 开启继承, initial -> 浏览器默认样式, unset -> 属性是继承的则为 inherit, 否则为 initial
3. 重新设置属性:


## 盒子模型


外部显示类型: 决定盒子是块级还是内联
1. block box 
  - 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽 
  - 每个盒子都会换行 
  - width 和 height 属性可以发挥作用 
  - 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

2. inline box 
  - 盒子不会产生换行。 
  - width 和 height 属性将不起作用。 
  - 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。 
  - 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。

内部显示类型: 决定盒子内部元素布局
- display: flex
- display: inline-flex

盒子模型组成部分
- Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.
- Padding box: 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。
- Border box: 边框盒包裹内容和内边距。大小通过 border 相关属性设置。
- Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置

标准模型和 IE 模型
- 标准盒子模型尺寸:     `盒子总宽度 = content(width) + margin + padding + border;`
- IE 模型 border-box: `盒子总宽度(width) = content + padding + border;`

```css
.wrapper {
  box-sizing: border-box;
  width: 100px;
  /* Content Box = 100px - Padding box - Border box */
}
```

## css3 选择器

1. 类型选择器
2. 类选择器
  - 普通: .wrapper
  - 特定元素: div.wrapper
  - 同一元素多个类: .wrapper.closed
3. ID 选择器
4. 通配选择器
5. 标签属性选择器
 - 属性是否存在: a[title]
 - 基于不同属性值

 ```css
div[class~="wrapper"] 可选中 "wrapper open"的类

div[class="wrapper"]只可选中"wrapper", 不可选中"wrapper other"

div[class^="box-"] 选中 box-开头的类

div[class$="-box"] 选中 -box结尾的类

div[class*="box"] 选中带有"box"的类

div[class*="box" i] 大小写不敏感, 可匹配"BOX"的类
 ```

6. 伪类选择器: 选择处于特定状态的元素
  - :first-child -> 第一个子元素 
  - :last-child -> 最后一个子元素 
  - :only-child -> 没有任何兄弟元素的元素 
  - :nth-child(n) -> 第 n 个子元素 
  - :nth-of-type(2n+1) -> 同种元素的兄弟元素 
  - :nth-last-of-type -> 从结尾开始的序列的兄弟元素 
  - :nth-last-child(1), -> 从结尾开始的序列的子元素 
  - :invalid -> 表示任意内容未通过验证的或其他元素 
  - :hover ——> 只会在用户将指针挪到元素上的时候才会激活，一般就是链接元素。 
  - :focus ——> 只会在用户使用键盘控制，选定元素的时候激活。


7. 伪元素: 元素的某部分
 - ::before -> 父元素内部之前显示,需要 content,默认为 inline 元素 
 - ::after -> 父元素内部之后显示 parent

8. 关系选择器
 - 相邻兄弟选择器 -> h + p
 - 通用兄弟选择器 -> h ~ p, p 元素必须为 h 后面的兄弟元素,若是前面的兄弟则无效
 - 子选择器 -> div > p, div 的直接后代 p,嵌套的不算
 - 后代选择器 -> div p, div 的所有后代 p,包括嵌套

 ## 定位
- static
- relative
- absolute
- fixed
- sticky: relative + fixed

## 代码相关
1. css 隐藏元素
  - opacity: 0(占据文档流) 
  - visibility: hidden(占据文档流) 
  - display: none(不占据文档流) 
  - position -> absolute -> 移出窗口(不占据文档流

2. z-index
对于一个已经定位的元素（即 position 属性值不是 static 的元素），z-index 属性指定：元素在当前堆叠上下文中的堆叠层级，元素是否创建一个新的本地堆叠上下文。

3. var: 方法的第一个参数是要替换的自定义属性的名称。函数的可选第二个参数用作回退值。如果第一个参数引用的自定义属性无效，则该函数将使用第二个值。
```css
.text{
  --text-color: red;
}
.text:hover {
  // 显示 red, blue 为回退值
  color: var(--text-color, blue);
}
```
4. pointer-events
指示该元素不是鼠标事件的目标之外，值 none 表示鼠标事件“穿透”该元素并且指定该元素“下面”的任何东西(点击穿透蒙层)

5. margin,padding 百分比: 相对于最近父级块级元素的 width
6. line-height
- 值为无单位数字: 代表行高为字体尺寸的 n 倍
- normal: 字体默认行高, 有 font-family 决定
- 值为有单位: 代表行高的尺寸

## 布局

1. 垂直居中，水平居中

> https://codepen.io/kyr1e/pen/KxyrKL?editors=1100

水平居中
- 行内元素: text-align: center
- 块级元素: margin: 0 auto
- absolute + transform
- flex + justify-content: center

垂直居中
- line-height: height
- absolute + transform
- flex + align-items: center
- table

水平垂直居中
- absolute + transform
- flex + justify-content + align-items

2. 三栏布局,中间自适应，两栏布局,一边自适应

>绝对定位, 浮动, 圣杯布局, 双飞翼布局, Flex https://codepen.io/kyr1e/pen/yxvaRb

3. css 布局,css 定位,relative 定位规则

>https://codepen.io/kyr1e/pen/yxvaRb

4. flex 布局,column,row 设置后的区别

>https://codepen.io/kyr1e/pen/mGqQZo

5. css 伪元素,伪类,box-sizing,盒子模型

>伪元素: 元素的某部分. 伪类: 元素的某种状态.

6. 元素尺寸, 位置获取
```
判断: 判断当前元素与父元素offsetParent(第一个非static父元素, 同absolute)的距离. 可以利用这个来实现滚动切换标签.
offsetTop, offsetLeft: 距离offsetParent偏移的top和left
offsetHeight, offsetWidth: 元素的宽高(包括边框, 内边距, 滚动条)
scrollTop, scrollLeft: 可滚动元素滚动的距离, scrollLeft -> 当前滚动列表在视图左边界和滚动列表头部的距离
scrollHeight, scrollLeft: 可滚动元素的整体尺寸(包括不可视区)
window.innerWidth, window.innerHeight: 视图(viewprot)尺寸(包括滚动条)
clientHeight, clientWidth: 元素尺寸(包括padding, 不包括border, margin和滚动条)
Element.getBoundingClientRect(): 返回DOMRect对象, 包含left, top, bottom, right(元素相对于视图左边界和上边界的距离), width, height(包含被滚动隐藏部分,padding和border参与计算).height = bottom - top, width = right - left;
```

## src,href 区别
- src 用于替代这个元素
- href 用于建立这个标签与外部资源之间的关系

1. 对于 href 加载 css, 会和html **解析加载并行执行**, 不会阻塞, 而@import 加载样式需要页面加载完才开始.
2. 对 src 加载 js, 加载到 src 属性的标签时会**暂停 html 的加载**直至 src 的内容加载完成后

## animation

1. keyframes
```css
@keyframes name{ 0% {...} 100% {...}} 
animation: @keyframes | duration | timing-cuntion | delay | iteration-count | direction | fill-mode | play-state | name 
animation-name: name; // keyframes 动画 
animation-duration: 1s; // 动画持续时间 
animation-iteration-count: infinite // 动画播放次数 
animation-fill-mode: forwards; // 在动画执行之前或之后应用样式, forwards 保留动画最后一帧计算值(可避免动画闪烁回到原地) 
animation-play-state: paused ; // 定义动画是否运行或停止 
animation-timing-function: linear; // 动画运行节奏
```
2. animation-direction
> 动画是否反向播放

- alternate: 交替正反向运行
- reverse: 反向运行
- normal: 正常运行, 动画结束后回到起点

3. animation-delay: 1s; // 动画延迟


## 使用 css 的三种方式
- 外部样式表
- 内部样式表
- 内联样式

## css 加载过程
- load html -> parse html + load css, parse html -> create dom tree, load css -> parse css -> attach style to dom nodes.
- 浏览器拉取到 CSS 之后会进行解析，根据选择器的不同类型（比如 element、class、id 等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id 选择器等）应用在对应的 DOM 的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）
- css 解析过程遇到错误不会阻塞报错, 会跳过该错误继续解析

## css 硬件加速
> link: https://juejin.cn/post/7001634685927292936#heading-4

- 查看硬件加速: chrome -> f12, element -> rendering -> layer border. 黄色框内为 GPU 渲染, 蓝色为 CPU 渲染
- CPU 和 GPU: CPU 处理复杂的任务, GPU 处理重复且大量的任务效率高, 如动画、3d 相关
- GPU 渲染: 重复且大量的 css 计算会默认触发硬件加速, 硬件加速新建图层并将对应元素移动到图层进行渲染, 可以减轻 CPU 压力(CSS 大部分样式有 CPU 进行计算)
- 触发 GPU 渲染属性: transform, opacity, filter, will-change 等 css 属性