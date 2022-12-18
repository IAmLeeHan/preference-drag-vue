/*
 * @Descripttion: spider
 * @version: 1.0.0
 * @Author: Lee Han
 * @Date: 2022-12-18 16:36:58
 * @LastEditors: Lee Han
 * @LastEditTime: 2022-12-18 18:26:54
 */
import PreferenceDragVue from "./src/index.vue";
PreferenceDragVue.install = (app) => {
  app.component(PreferenceDragVue.name, PreferenceDragVue);
};
export default PreferenceDragVue;
