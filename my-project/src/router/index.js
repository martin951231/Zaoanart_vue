// import Vue from 'vue'
// import Router from 'vue-router'
// import Index from '../pages/Index'
// import Erjiye from '../pages/Erjiye'
// import Sanjiye from '../pages/Sanjiye'
// import Sign from '../pages/Sign'
// import Login from '../pages/Login'
// import Home from '../pages/Home'
// import Shopcar from '../pages/Home/shopcar'
// import History from '../pages/Home/history'
// import Keep from '../pages/Keep'
// import Keepimg from '../pages/Keep/Keepimg'
// import Recommend from '../pages/Keep/recommend'
// import Decoration from '../pages/Decoration'
// Vue.use(Router)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: resolve => require(['../pages/Index'], resolve),
        },

        {
            path: '/erjiye',
            name:'Erjiye',
            component: resolve => require(['../pages/erjiye'], resolve),
        },
        {
            path: '/sanjiye',
            name:'Sanjiye',
            component:resolve => require(['../pages/sanjiye'], resolve),
        },
        {
            path: '/sign',
            name:'Sign',
            component:resolve => require(['../pages/sign'], resolve),
        },
        {
            path: '/login',
            name:'Login',
            component:resolve => require(['../pages/login'], resolve),
        },
        {
            path: '/home',
            name:'Home',
            component:resolve => require(['../pages/home'], resolve),
        },
        {
            path: '/home/shopcar',
            name: 'Shopcar',
            component:resolve => require(['../pages/home/shopcar'], resolve),
        },
        {
            path: '/home/history',
            name: 'History',
            component:resolve => require(['../pages/home/history'], resolve),
        },
        {
            path: '/keep',
            name:'Keep',
            component:resolve => require(['../pages/keep'], resolve),
        },
        {
            path: '/keep/keepimg',
            name: 'Keepimg',
            component:resolve => require(['../pages/keep/keepimg'], resolve),
        },
        {
            path: '/keep/recommend',
            name: 'Recommend',
            component:resolve => require(['../pages/keep/recommend'], resolve),
        },
        {
            path: '/decoration',
            name: 'Decoration',
            component:resolve => require(['../pages/decoration'], resolve),
        }
    ]
})
