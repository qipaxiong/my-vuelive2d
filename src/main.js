/*
 * @Description: 
 * @Version: 0.1
 * @Autor: 黄鹏举
 * @Date: 2020-09-19 21:41:44
 * @LastEditors: Seven
 * @LastEditTime: 2020-09-23 22:19:46
 */
import Vue from 'vue'
import App from './App.vue'
import Mylive2d from '@/components/index'
Vue.config.productionTip = false

Vue.use(Mylive2d )

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
