/*
 * @Descripttion: spider
 * @version: 1.0.0
 * @Author: Lee Han
 * @Date: 2022-12-18 16:36:58
 * @LastEditors: Lee Han
 * @LastEditTime: 2022-12-18 18:11:06
 */
import PreferenceDragVue from './preference-drag-vue';

// 将引入的组件模块存储，方便循环注册所有组件
const components = [ PreferenceDragVue ];

const install = (Vue)=>{
  if (install.installed) return;
  install.installed = true
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 如果是直接引入的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 使用Vue.use必须具有install方法
  // https://cn.vuejs.org/v2/api/#Vue-use
  install,
  // 同时导出组件列表
  ...components
}