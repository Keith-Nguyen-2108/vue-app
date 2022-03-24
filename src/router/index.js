import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VBind from '@/components/VBind'
import Todos from '@/components/Todos'
import Table from '@/components/Table'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/bind',
      name: 'VBind',
      component: VBind
    },
    {
      path: '/todo',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})
