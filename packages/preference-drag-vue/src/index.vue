<!--
 * @Descripttion: spider
 * @version: 1.0.0
 * @Author: Lee Han
 * @Date: 2022-12-18 16:36:47
 * @LastEditors: Lee Han
 * @LastEditTime: 2022-12-18 18:15:20
-->
<template>
  <div>
    <div v-if="!showCanvas" style="color:red;">this.row必须是奇数且能被this.settingData.length整除</div>
    <div class="preference-drag">
      <h1 class="preference-drag-title" :style="{ color: typeColor }">{{ desc }}</h1>
      <div class="preference-drag-container">
        <div class="preference-drag-main">
          <canvas id="preferenceDrag"></canvas>
        </div>
        <div
          :class="['topTitle', { active: record[1] < rowCenterNumber || (record[0] == colCenterNumber && record[1] == rowCenterNumber) }]">
          {{ topTitle }}</div>
        <div
          :class="['leftTitle', { active: record[0] < colCenterNumber || (record[0] == colCenterNumber && record[1] == rowCenterNumber) }]">
          {{ leftTitle }}</div>
        <div
          :class="['rightTitle', { active: record[0] > colCenterNumber || (record[0] == colCenterNumber && record[1] == rowCenterNumber) }]">
          {{ rightTitle }}</div>
        <div
          :class="['bottomTitle', { active: record[1] > rowCenterNumber || (record[0] == colCenterNumber && record[1] == rowCenterNumber) }]">
          {{ bottomTitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { fabric } from "fabric"
import { setUpATwoDimensionalArray } from "./utils/index";
export default {
  name: 'preference-drag-vue',
  props: {
    netSize: {
      type: Number,
      default: 40
    },
    settingData: {
      type: Array,
      default: () => []
    },
    // 必须是奇数且能被settingData.length整除
    row: {
      type: Number,
      default: 5
    },
    topTitle: {
      type: String,
      default: 'topTitle'
    },
    leftTitle: {
      type: String,
      default: 'leftTitle'
    },
    rightTitle: {
      type: String,
      default: 'rightTitle'
    },
    bottomTitle: {
      type: String,
      default: 'bottomTitle'
    },
  },
  data() {
    return {
      preferenceDrag:null,
      showCanvas: false,
      record: [0, 0],
      desc: '',
      typeColor: 'red',
      borderColor: 'pink',
      rowCenterNumber: 0,
      colCenterNumber: 0,
      viewData: [],
      size: {
        width: 0,
        height: 0
      }
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.init()
    })
  },
  methods: {
    init() {
      let takeTheBalance = this.settingData.length % this.row
      let cols = this.settingData.length / this.row
      if (!!this.row && this.row % 2 != 0 && takeTheBalance == 0 && cols % 2 != 0) {
        this.showCanvas = true
        this.viewData = setUpATwoDimensionalArray(this.settingData, this.row)
        this.colCenterNumber = Math.round(this.row / 2)
        this.rowCenterNumber = Math.round(cols / 2)
        this.size.width = this.netSize * this.row + 40
        this.size.height = this.netSize * cols + 40
        this.record = [this.rowCenterNumber, this.colCenterNumber]
        // 这里传入的是canvas元素的id
        this.preferenceDrag = new fabric.Canvas('preferenceDrag', {
          width: this.size.width, // 画布宽度
          height: this.size.height, // 画布高度
        })
        for (let i = 0; i <= cols; i++) {
          let line = new fabric.Line(
            [
              20, 20 + this.netSize * i, // 起始点坐标
              this.size.width - 20, 20 + this.netSize * i // 结束点坐标
            ],
            {
              stroke: '#eee', // 笔触颜色
              selectable: false,
              hoverCursor: 'default'
            }
          )
          this.preferenceDrag.add(line)
        }

        for (let i = 0; i <= this.row; i++) {
          let line = new fabric.Line(
            [
              20 + this.netSize * i, 20, // 起始点坐标
              20 + this.netSize * i, this.size.height - 20 // 结束点坐标
            ],
            {
              stroke: '#eee', // 笔触颜色
              selectable: false,
              hoverCursor: 'default'
            }
          )
          this.preferenceDrag.add(line)
        }
        this.getDesc()
        this.getFillColor()
        // 圆形
        const dragBtn = new fabric.Circle({
          name: 'dragBtn',
          originX: 'center',
          originY: 'center',
          hasControls: false,
          hasBorders: false,
          top: 20 + this.record[0] * this.netSize - this.netSize / 2,
          left: 20 + this.record[1] * this.netSize - this.netSize / 2,
          radius: this.netSize / 2 - 4, // 圆的半径
          fill: this.typeColor,
          stroke: this.borderColor,
          strokeWidth: 20
        })
        this.preferenceDrag.add(dragBtn)
        this.preferenceDrag.on('mouse:up', (e) => {
          let x = e.pointer.x
          let y = e.pointer.y
          if (x < 20) {
            x = 20 + this.netSize / 2
          }
          if (x > this.size.width - 20) {
            x = (this.size.width - 20) - this.netSize / 2
          }
          if (y < 20) {
            y = 20 + this.netSize / 2
          }
          if (y > this.size.height - 20) {
            y = (this.size.height - 20) - this.netSize / 2
          }
          let pX = Math.ceil((x - 20) / this.netSize);
          let pY = Math.ceil((y - 20) / this.netSize);
          this.record = [pX, pY]
          this.getDesc()
          this.getFillColor()
          dragBtn.setOptions({
            'originX': 'center',
            'originY': 'center',
            'top': 20 + this.record[1] * this.netSize - this.netSize / 2,
            'left': 20 + this.record[0] * this.netSize - this.netSize / 2,
            fill: this.typeColor,
            stroke: this.borderColor,
            strokeWidth: 20,
          })
          this.preferenceDrag.remove(dragBtn).add(dragBtn)
        })
        this.preferenceDrag.on('object:moving', (e) => {
          let x = e.pointer?.x
          let y = e.pointer?.y
          if (x < 20) {
            x = 20 + this.netSize / 2
          }
          if (x > this.size.width - 20) {
            x = (this.size.width - 20) - this.netSize / 2
          }
          if (y < 20) {
            y = 20 + this.netSize / 2
          }
          if (y > this.size.height - 20) {
            y = (this.size.height - 20) - this.netSize / 2
          }
          let pX = Math.ceil((x - 20) / this.netSize);
          let pY = Math.ceil((y - 20) / this.netSize);
          this.record = [pX, pY]
          this.getDesc()
          this.getFillColor()
          dragBtn.setOptions({
            'originX': 'center',
            'originY': 'center',
            'top': 20 + this.record[1] * this.netSize - this.netSize / 2,
            'left': 20 + this.record[0] * this.netSize - this.netSize / 2,
            fill: this.typeColor,
            stroke: this.borderColor,
            strokeWidth: 20,
          })
          this.preferenceDrag.remove(dragBtn).add(dragBtn)
        })
      }
    },
    getDesc() {
      this.settingData.forEach((setting) => {
        if (setting.value == this.record.join('-')) this.desc = setting.desc
      })
    },
    getFillColor() {
      this.settingData.forEach((setting) => {
        if (setting.value == this.record.join('-')) {
          this.typeColor = setting.background
          this.borderColor = setting.borderColor
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.preference-drag {
  width: max-content;

  .preference-drag-title {
    text-align: center;
  }

  .preference-drag-container {
    padding: 40px 100px;
    position: relative;
    width: max-content;
    height: max-content;
    position: relative;

    .preference-drag-main {
      position: relative;

      .preference-drag-button {
        background: #127fe4;
        border: 6px solid#4ef8a952;
        border-radius: 50%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
      }

      .preference-drag-main-area {
        border-collapse: collapse;

        td {
          padding: 10px;
          border: 1px solid #303133;
        }
      }
    }

    .topTitle {
      width: max-content;
      height: max-content;
      position: absolute;
      left: 0;
      right: 0;
      top: 5px;
      margin: auto;
      opacity: .3;

      &.active {
        opacity: 1;
      }
    }

    .leftTitle {
      width: max-content;
      height: max-content;
      position: absolute;
      left: 5px;
      top: 0;
      bottom: 0;
      margin: auto;
      opacity: .3;

      &.active {
        opacity: 1;
      }
    }

    .rightTitle {
      width: max-content;
      height: max-content;
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 0;
      margin: auto;
      opacity: .3;

      &.active {
        opacity: 1;
      }
    }

    .bottomTitle {
      width: max-content;
      height: max-content;
      position: absolute;
      bottom: 5px;
      right: 0;
      left: 0;
      margin: auto;
      opacity: .3;

      &.active {
        opacity: 1;
      }
    }
  }
}
</style>