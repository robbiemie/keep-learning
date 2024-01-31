<template>
  <div>
    <section class="demo1">
      <!-- 清除元素浮动 -->
      <div class="parent">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
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
.demo1 {
  .parent{
      width: 350px;
      background-color: blue;
      margin: 10px auto;
      display: block;
      /* overflow: hidden; */
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
</style>
