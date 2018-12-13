import Vue from 'vue'
import Router from 'vue-router'
import EditView from '../layouts/EditView'
import MainView from '../layouts/MainView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/edit/:layoutId',
      name: 'edit',
      component: EditView
    }
  ]
})
