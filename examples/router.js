import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: r => require.ensure([], () => r(require('./views/Home.vue')))
    },
    {
      path: '/component',
      name: 'component',
      component: r => require.ensure([], () => r(require('./views/Component.vue'))),
      children: [
        {
          path: 'changeLog',
          name: 'changeLog',
          component: r => require.ensure([], () => r(require('./views/ChangeLog.vue')))
        },
        {
          path: 'installation',
          name: 'installation',
          component: r => require.ensure([], () => r(require('./docs/installation.md')))
        },
        {
          path: 'quickstart',
          name: 'quickstart',
          component: r => require.ensure([], () => r(require('./docs/quickstart.md')))
        },
        {
          path: 'btn',
          name: 'btn',
          component: r => require.ensure([], () => r(require('./docs/btn.md')))
        }
      ]
    }
  ]
})
