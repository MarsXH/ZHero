import Vue from 'vue'
import App from './App.vue'
import router from './router'
import install from '../packages/index'
import hljs from 'highlight.js'
import DemoBlock from './components/demo-block.vue'
import 'highlight.js/styles/color-brewer.css'
import '@/assets/styles/common.less'
import '@/assets/styles/md.less'

Vue.component('demo-block', DemoBlock)
install(Vue)

Vue.config.productionTip = false

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
