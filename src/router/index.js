import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Index.vue'
import Info from './../components/info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Info',
      component: Info
    }
    ]
   })
