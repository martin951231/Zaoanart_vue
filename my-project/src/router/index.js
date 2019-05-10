import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Erjiye from '../pages/Erjiye'
import Sanjiye from '../pages/Sanjiye'
import Sign from '../pages/Sign'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Shopcar from '../pages/Home/shopcar'
import History from '../pages/Home/history'
import Keep from '../pages/Keep'
import Keepimg from '../pages/Keep/Keepimg'
import Recommend from '../pages/Keep/recommend'
import Decoration from '../pages/Decoration'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },

    {
      path: '/erjiye',
      component:Erjiye,
    },
    {
      path: '/sanjiye',
      component:Sanjiye,
    },
      {
          path: '/sign',
          component:Sign,
      },
      {
          path: '/login',
          component:Login,
      },
      {
          path: '/home',
          component:Home,
      },
      {
          path: '/home/shopcar',
          name: 'shopcar',
          component:Shopcar,
      },
      {
          path: '/home/history',
          name: 'history',
          component:History,
      },
      {
          path: '/keep',
          name:'keep',
          component:Keep,
      },
      {
          path: '/keep/keepimg',
          name: 'keepimg',
          component:Keepimg,
      },
      {
          path: '/keep/recommend',
          name: 'recommend',
          component: Recommend,
      },
      {
          path: '/decoration',
          name: 'decoration',
          component:Decoration,
      }
  ]
})
