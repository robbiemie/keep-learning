<template>
  <div>
    <section class="demo1">
      <p>清除元素浮动</p>
      <div class="parent">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
      </div>
      <div class="parent">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
      </div>
    </section>
    <section class="demo2">
      <p>两栏布局-flex</p>
      <div class="container">
        <div class="left">Left</div>
        <div class="right">Right (Auto)</div>
      </div>
    </section>
    <section class="demo3">
      <p>两栏布局-float</p>
      <div class="container">
        <div class="left">Left</div>
        <div class="right">Right (Auto)</div>
      </div>
    </section>

    <section class="demo4">
      <p>两栏布局-grid</p>
      <div class="container">
        <div class="left">Left</div>
        <div class="right">Right (Auto)</div>
      </div>
    </section>

    <section class="demo5">
      <p>三栏布局-flex</p>
      <div class="container">
        <div class="left">Left</div>
        <div class="content">Content (Auto)</div>
        <div class="right">Right</div>
      </div>
    </section>

  <section class="demo6">
    <p>三栏布局-grid</p>
    <div class="container">
      <div class="left">Left</div>
      <div class="content">Content (Auto)</div>
      <div class="right">Right</div>
    </div>
  </section>

  <section class="demo7">
    <p>三栏布局-float</p>
    <div class="container">
      <div class="left">Left</div>
      <div class="content">Content (Auto)</div>
      <div class="right">Right</div>
      <div class="clearfix"></div>
    </div>
  </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
p {
  text-align: center;
}
.demo1 {
  .parent{
      width: 350px;
      background-color: blue;
      margin: 10px auto;
      display: block;
      overflow: hidden;
  }
  .child{
      width: 100px;
      height: 100px;
      float: left;
      line-height: 100px;
      text-align: center;
      background-color: cornsilk;
  }
}

.demo2 {
  .container {
    display: flex;
    border: 1px solid #000;
    height: 200px;
    .left {
      width: 200px;
    }
    .right {
      flex: 1;
      background-color: #ccc;
    }
  }
}
.demo3 {
  .container {
    border: 1px solid #000;
    height: 200px;
    .left {
      float: left;
      width: 200px;
    }
    .right {
      margin-left: 200px;
      height: 100%;
      background-color: #ccc;
    }
  }
}
.demo4 {
  .container {
    display: grid;
    grid-template-columns: 200px 1fr;
    border: 1px solid #000;
    height: 200px;
    .right {
      background-color: #ccc;
    }
  }
}
.demo5 {
  .container {
    border: 1px solid #000;
    height: 200px;
    display: flex;
    .left {
      width: 200px;
      flex-shrink: 0;
      background-color: #eca1a1;
    }
    .content {
      flex: 1;
      background-color: #ccc;
    }
    .right {
      width: 200px;
      flex-shrink: 0;
      background-color: #3f2e2e;
    }
  }
}
.demo6 {
  .container {
    border: 1px solid #000;
    height: 200px;
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    .left {
      background-color: #eca1a1;
    }
    .content {
      background-color: #ccc;
    }
    .right {
      background-color: #3f2e2e;
    }
  }
}
.demo7 {
  div {
    height: 100%;
  }
  .container {
    border: 1px solid #000;
    height: 200px;
    .left {
      float: left;
      width: 200px;
      background-color: #eca1a1;
    }
    .content {
      width: calc(100% - 400px);
      float: left;
      background-color: #ccc;
    }
    .right {
      float: right;
      width: 200px;
      background-color: #3f2e2e;
    }
  }
}
</style>
