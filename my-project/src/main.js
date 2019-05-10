// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import  VueResource  from 'vue-resource'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)
Vue.prototype.$ajax = Axios
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueResource)
Vue.use(VueLazyLoad,{
    // error:'./static/img/error.jpg',
    // loading:'./static/img/timg.gif'
    error:'http://118.178.89.229/resource/images/error.jpg',
    loading:'http://118.178.89.229/resource/images/timg.gif'
})
//设置cookie
Vue.prototype.setCookie = function(c_name,value,expiredays) {
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
};
//获取cookie
Vue.prototype.getCookie=function(c_name) {
    if (document.cookie.length>0)
    {
        var  c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            var c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
};
toastr.options = {
    closeButton: true,
    debug: false,
    positionClass: "toast-bottom-center",
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "3000",
    progressBar: false,
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};
import VueLazyLoad from 'vue-lazyload'
// Vue.use(VueAxios,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
