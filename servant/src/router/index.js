import Vue from 'vue'
import Router from 'vue-router'
import Head from '../components/Head'
const Home = () => import('../components/Home');
const Glwx = () => import("../components/Glwx");
const Kcfd = () => import("../components/Kcfd");
const Jlq  = () => import("../components/Jlq");
const Last = () => import("../components/Last");
const NotFound = () => import('../components/NotFound');
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:true  //保持加载后的当前状态
      }
    },
  {
    path: '/head',
    name: 'Head',
    component: Head
  },
    {
      path: '/glwx',
      name: 'Glwx',
      component: Glwx
    },
    {
      path: '/last',
      name: 'Last',
      component: Last
    },
    {
      path: '/kcfd',
      name: 'Kcfd',
      component: Kcfd
    },
    {
      path: '/jlq',
      name: 'Jlq',
      component: Jlq
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
