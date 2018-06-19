// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueQuillEditor from 'vue-quill-editor'
import pkxt from './components/pkxt.vue'
import tyym from './components/tyym.vue'
import gztj from './components/gztj.vue'
import zdpk from './components/zdpk.vue'
import pktz from './components/pktz.vue'
import ckkb from './components/ckkb.vue'
// import _Quill from 'quill'
// const Quill = window.Quill || _Quill
import '../public/css/index.css' 
import '../public/css/quill.snow.css' 
// Vue.use(VueQuillEditor);
Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  {path: '/', component: tyym},
  {path: '/pkxt', component: pkxt},
  {path: '/gztj', component: gztj},
  {path: '/zdpk', component: zdpk},
  {path: '/pktz', component: pktz},
  {path: '/ckkb', component: ckkb},
];  

// 声明一个路由对象                        
const router = new VueRouter({
  //mode: 'history',
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
