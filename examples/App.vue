<!--
 * @Descripttion: spider
 * @version: 1.0.0
 * @Author: Lee Han
 * @Date: 2022-12-18 10:19:52
 * @LastEditors: Lee Han
 * @LastEditTime: 2022-12-18 18:26:23
-->
<template>
  <div id="app">
    <preference-drag-vue :row="5" :settingData="settingData" :netSize="50" topTitle="topTitle-test"
      leftTitle="leftTitle-test" rightTitle="rightTitle-test" bottomTitle="bottomTitle-test" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      settingData: [
        {
          desc: '11',
          value: '1-1',
          background: 'rgb(150, 248, 163)',
          borderColor: 'rgba(150, 248, 163, .3)',
        },
        {
          desc: '12',
          value: '1-2',
          background: 'rgb(128, 245, 144)',
          borderColor: 'rgba(128, 245, 144, .3)',
        },
        {
          desc: '13',
          value: '1-3',
          background: 'rgb(117, 241, 133)',
          borderColor: 'rgba(117, 241, 133, .3)',
        },
        {
          desc: '14',
          value: '1-4',
          background: 'rgb(12, 158, 32)',
          borderColor: 'rgba(12, 158, 32, .3)',
        },
        {
          desc: '15',
          value: '1-5',
          background: 'rgb(6, 102, 18)',
          borderColor: 'rgba(6, 102, 18, .3)',
        },
        {
          desc: '21',
          value: '2-1',
          background: 'rgb(86, 248, 199)',
          borderColor: 'rgba(86, 248, 199, .3)',
        },
        {
          desc: '22',
          value: '2-2',
          background: 'rgb(77, 219, 176)',
          borderColor: 'rgba(77, 219, 176, .3)',
        },
        {
          desc: '23',
          value: '2-3',
          background: 'rgb(61, 170, 137)',
          borderColor: 'rgba(61, 170, 137, .3)',
        },
        {
          desc: '24',
          value: '2-4',
          background: 'rgb(47, 126, 102)',
          borderColor: 'rgba(47, 126, 102, .3)',
        },
        {
          desc: '25',
          value: '2-5',
          background: 'rgb(32, 85, 69)',
          borderColor: 'rgba(32, 85, 69, .3)',
        },
        {
          desc: '31',
          value: '3-1',
          background: 'rgb(142, 205, 247)',
          borderColor: 'rgba(142, 205, 247, .3)',
        },
        {
          desc: '32',
          value: '3-2',
          background: 'rgb(104, 164, 204)',
          borderColor: 'rgba(104, 164, 204, .3)',
        },
        {
          desc: '33',
          value: '3-3',
          background: 'rgb(69, 125, 161)',
          borderColor: 'rgba(69, 125, 161, .3)',
        },
        {
          desc: '34',
          value: '3-4',
          background: 'rgb(45, 94, 124)',
          borderColor: 'rgba(45, 94, 124, .3)',
        },
        {
          desc: '35',
          value: '3-5',
          background: 'rgb(34, 100, 141)',
          borderColor: 'rgba(34, 100, 141, .3)',
        },
        {
          desc: '41',
          value: '4-1',
          background: 'rgb(218, 118, 243)',
          borderColor: 'rgba(218, 118, 243, .3)',
        },
        {
          desc: '42',
          value: '4-2',
          background: 'rgb(159, 79, 179)',
          borderColor: 'rgba(159, 79, 179, .3)',
        },
        {
          desc: '43',
          value: '4-3',
          background: 'rgb(122, 57, 138)',
          borderColor: 'rgba(122, 57, 138, .3)',
        },
        {
          desc: '44',
          value: '4-4',
          background: 'rgb(164, 63, 189)',
          borderColor: 'rgba(164, 63, 189, .3)',
        },
        {
          desc: '45',
          value: '4-5',
          background: 'rgb(193, 58, 226)',
          borderColor: 'rgba(193, 58, 226, .3)',
        },
        {
          desc: '51',
          value: '5-1',
          background: 'rgb(238, 98, 163)',
          borderColor: 'rgba(238, 98, 163, .3)',
        },
        {
          desc: '52',
          value: '5-2',
          background: 'rgb(214, 76, 140)',
          borderColor: 'rgba(214, 76, 140, .3)',
        },
        {
          desc: '53',
          value: '5-3',
          background: 'rgb(161, 46, 100)',
          borderColor: 'rgba(161, 46, 100, .3)',
        },
        {
          desc: '54',
          value: '5-4',
          background: 'rgb(207, 21, 108)',
          borderColor: 'rgba(207, 21, 108, .3)',
        },
        {
          desc: '55',
          value: '5-5',
          background: 'rgb(235, 13, 116)',
          borderColor: 'rgba(235, 13, 116, .3)',
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
