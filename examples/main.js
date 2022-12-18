/*
 * @Descripttion: spider
 * @version: 1.0.0
 * @Author: Lee Han
 * @Date: 2022-12-18 10:19:52
 * @LastEditors: Lee Han
 * @LastEditTime: 2022-12-18 18:27:01
 */
import Vue from 'vue'
import App from './App.vue'
import libs from "../packages"
Vue.use(libs)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
