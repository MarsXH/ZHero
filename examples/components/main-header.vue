<template>
  <div class="main-header">
    <div class="main-header-logo">
      <img src="@/assets/images/logo.png"/>
    </div>
    <div class="main-header-title">ZHero</div>
    <ul class="main-header-nav">
      <li class="active">组件</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
.main-header {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-box-shadow: 0 2px 8px #f0f1f2;
  box-shadow: 0 2px 8px #f0f1f2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 65px;
  color: #444;
  background-color: #fff;
  .main-header-logo {
    height: 100%;
    float: left;
    margin-left: 40px;
    position: absolute;
    img {
      height: 30px;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      transition: all 2s ease;
    }
    img:hover {
      transform: translateY(-50%) rotateX(360deg);
      -webkit-transform: translateY(-50%) rotateX(360deg);
    }
  }
  .main-header-title {
    color: #1989fa;
    height: 65px;
    line-height: 65px;
    font-size: 25px;
    display: inline-block;
    padding-left: 75px;
    font-weight: bold;
  }
  .main-header-nav {
    margin: 0;
    padding: 0;
    float: right;
    height: 100%;
    background: transparent;
    margin-right: 160px;
    li {
      list-style: none;
      color: #314659;
      opacity: .6;
      height: 100%;
      line-height: 65px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      min-width: 72px;
      border-top: 2px solid transparent;
      text-align: center;
      cursor: pointer;
      font-size: 15px;
      float: left;
      border-bottom: 3px solid #fff;
      -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    li.active {
      color: #1989fa;
      opacity: 1;
      border-bottom: 3px solid #1989fa;
    }
  }
}
</style>
