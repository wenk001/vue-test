import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";
import VueRouter from 'vue-router'
import Storage from 'vue-ls'
import store from './store/'

Vue.config.productionTip = false

Vue.use(Storage)
Vue.use(Antd)
Vue.use(VueRouter)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
