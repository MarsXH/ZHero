<template>
  <div class="home">
    <img
      src="@/assets/images/logo.png"
      :class="['logo', { 'logo-rotate': logoRotate }]"/>
    <h1 class="title">ZHero</h1>
    <h2 class="subtitle">This is an UI framework for Vue.</h2>
    <!-- <h2 class="subtitle">This is an open source UI framework for Vue.</h2> -->
    <div class="links">
      <router-link to="/component/installation">Documentation</router-link>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank">
        GitHub
      </a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank">
        NPM
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logoRotate: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.logoRotate = !this.logoRotate
    }, 300)
    setInterval(() => {
      this.logoRotate = !this.logoRotate
    }, 3000)
  }
}
</script>

<style lang="less" scoped>
.home {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .logo {
    width: 200px;
    margin: 10px auto;
    transition: all 2s ease;
    perspective: 428px;
    -webkit-perspective: 428px;
  }
  .logo-rotate {
    transform: rotateX(360deg);
    -webkit-transform: rotateX(360deg);
  }
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
    a {
      color: #fcfcfd;
      background-color: #42b883;
      margin-bottom: 0;
      margin-right: 30px;
      display: inline-block;
      padding: 1rem 2rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: .5px;
      font-weight: 600;
      box-shadow: 0 0 1px 0 rgba(10,31,68,.08), 0 1px 1px 0 rgba(10,31,68,.08);
      border-radius: 4px;
    }
  }
}
</style>
