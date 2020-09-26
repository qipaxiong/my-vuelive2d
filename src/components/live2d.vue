<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: 黄鹏举
 * @Date: 2020-09-24 23:09:59
 * @LastEditors: Seven
 * @LastEditTime: 2020-09-24 23:50:12
-->
<template>
  <div>
    <canvas
      :id="canvasID"
      :data-path="imgPath"
      :data-hook="live2DNumder"
      ref="live2dCanvas"
      :width="width"
      :height="height"
      class="live2d"
      :style="canvasStyle"
    ></canvas>
  </div>
</template>
<script>
import L2dManage from "../lib/main";
export default {
  name: "mylive2d",
  props: {
    //看板娘参数
    canvasID: {
      type: String,
      default: "",
    },
    modelPath: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 290,
    },
    height: {
      type: Number,
      default: 280,
    },
    canvasStyle: {
      type: Object,
      default() {
        return {
          position: "relative",
          "z-index": 99,
        };
      },
    },
  },
  data() {
    return {
      L2dManage: "",
      imgPath: "",
      live2DNumder: 0,
    };
  },
  mounted() {
    this.L2dManage = new L2dManage(this.$refs.live2dCanvas, this.modelPath);
  },
  methods: {
    initL2dMange(modelPath) {
      this.L2dManage.revise(modelPath);
    },
    save(captureName) {
      this.L2dManage.save(captureName);
    },
    setImgPath(path) {
      this.imgPath = path;
    },
  },
  beforeUpdate() {
    this.L2dManage = null;
  },
  updated() {
    this.L2dManage = new L2dManage(this.$refs.live2dCanvas, this.modelPath);
  },
  watch: {
    modelPath(newPath) {
      this.initL2dMange(newPath);
    },
  },
};
</script>