```js
import debounce from 'lodash.debounce';

export function changeWindow() {
  let winWidth;
  let winHeight;
  if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    winHeight = document.documentElement.clientHeight;
    winWidth = document.documentElement.clientWidth;
  }

  const frameStyle = document.body.style;
  frameStyle.width = `${winWidth}px`;
  frameStyle.height = `${winHeight}px`;

  return {
    winWidth,
    winHeight
  };
}

export function checkFontSize() {
  const { winWidth } = changeWindow();
  // 设计稿宽度
  const UI_WIDTH = 390;

  // 修改font-size, rem自适应设备
  const fontSize = ((parseFloat(winWidth) / UI_WIDTH) * 100).toFixed(4);

  return fontSize;
}

export function pxToRem(px) {
  const rootFontSize = checkFontSize();

  return Number((px / rootFontSize).toFixed(2));
}

export function changeSize() {
  const fontSize = checkFontSize();
  // fontSize = fontSize > 115 ? 115 : fontSize;
  document.documentElement.style.fontSize = `${fontSize}px`;

  // 适配对font-size额外处理的手机
  const nowFontSize = parseFloat(getComputedStyle(document.documentElement, false)['font-size']);
  if (`${nowFontSize}` !== fontSize) {
    document.documentElement.style.fontSize = `${(fontSize * fontSize) / nowFontSize}px`;
  }
}

export function checkMobile() {
  // 非iframe
  if (window && window.top === window.self) {
    window.onresize = debounce(() => {
      changeSize();
    }, 100);

    setTimeout(() => changeSize()); // 兼容htmlAttrs
  }
}

export function checkPC() {
  // 非iframe
  if (window && window.top === window.self) {
    window.onresize = debounce(() => {
      changeWindow();
    }, 100);

    changeWindow();
  }
}
```