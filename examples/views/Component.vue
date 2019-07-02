<template>
  <div class="component">
    <main-header></main-header>
    <div class="main">
      <side-nav></side-nav>
      <div class="main-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/main-header'
import SideNav from '@/components/side-nav'
export default {
  data () {
    return {}
  },
  components: {
    MainHeader,
    SideNav
  }
}
</script>

<style lang="less" scoped>
.component {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  .main {
    width: 100%;
    min-height: cals(100vh-100px);
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    .main-content {
      padding: 0 84px 140px 330px;
      min-height: 500px;
      overflow: hidden;
    }
  }
}
</style>
