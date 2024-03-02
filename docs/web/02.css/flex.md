# flex 布局

> Flex布局（Flexbox）是一种用于设计和构建页面布局的现代CSS布局模型。Flex布局的目标是提供一种更加有效和直观的方式来对齐、分布和排列元素，特别是当元素的大小未知或动态变化时。

以下是Flex布局的主要概念和用法：

## 主轴和交叉轴

Flex布局是基于两个轴线的概念的：**主轴（main axis）和交叉轴（cross axis）。**
- 主轴（Main Axis）： Flex容器的主要方向，决定Flex项目的排列方向。默认为水平方向。
- 交叉轴（Cross Axis）： 与主轴垂直的方向，用于调整Flex项目在交叉轴上的布局。

## Flex 容器（Flex Container）的属性

- display: flex;： 将元素设置为Flex容器，使其内部的子元素成为Flex项目。
- flex-direction： 定义Flex容器的主轴方向，可选值包括row（水平方向，默认）、row-reverse（水平方向，反转）、column（垂直方向）、column-reverse（垂直方向，反转）。
- flex-wrap： 定义Flex项目在一行上排不下时是否换行，默认值是nowrap，可选值有wrap（换行）和wrap-reverse（反向换行）。
- flex-flow： 简写属性，同时设置flex-direction和flex-wrap。
- justify-content： 定义Flex项目在主轴上的对齐方式，包括flex-start（默认，起点对齐）、flex-end（终点对齐）、center（居中对齐）、space-between（两端对齐，项目之间平均分布）、space-around（项目两侧和项目之间平均分布）。
- align-items： 定义Flex项目在交叉轴上的对齐方式，包括flex-start（交叉轴起点对齐）、flex-end（交叉轴终点对齐）、center（交叉轴居中对齐）、baseline（项目的第一行文字的基线对齐）、stretch（默认，项目在交叉轴上拉伸填满容器）。
- align-content： 定义多行Flex项目在交叉轴上的对齐方式，与justify-content类似，可选值包括flex-start、flex-end、center、space-between、space-around、stretch。

## Flex 项目（Flex Item）的属性

- order： 定义Flex项目的排列顺序，数值越小，排列越靠前，默认为0。
- flex-grow： 定义Flex项目的放大比例，如果设置为1，则项目将占据剩余空间。默认值为0。
- flex-shrink： 定义Flex项目的缩小比例，如果设置为1，则项目在空间不足时将缩小。默认值为1。
- flex-basis： 定义Flex项目的基础大小，默认值为auto，可设置为具体的长度值。
- flex： 简写属性，同时设置flex-grow、flex-shrink和flex-basis。
- align-self： 单独为某个Flex项目设置交叉轴上的对齐方式，可覆盖align-items属性。

```css
.container {
  display: flex;
  flex-direction: row; /* 主轴方向为水平方向 */
  justify-content: space-between; /* 主轴上的对齐方式为两端对齐，项目之间平均分布 */
  align-items: center; /* 交叉轴上的对齐方式为居中对齐 */
}

.item {
  order: 2; /* 排列顺序为第2个 */
  flex-grow: 1; /* 放大比例为1，占据剩余空间 */
  flex-shrink: 0; /* 缩小比例为0，不缩小 */
  flex-basis: 200px; /* 基础大小为200px */
}
```