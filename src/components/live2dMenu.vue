<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: 黄鹏举
 * @Date: 2020-09-19 21:41:44
 * @LastEditors: Seven
 * @LastEditTime: 2020-09-25 00:19:36
-->
<template>
  <div
    class="live2d-menu"
    :id="menuID"
    :style="menuStyle"
    v-on="menuListeners"
    ref="live2dMenu"
  >
    <span  :class="icon" class="iconfont"></span>
  </div>
</template>

<script>
import tools from "./../lib/tools";
export default {
  name: "mylive2dMenu",
 data() {
     return {
         live2dMenu: "",
     }
 },
  props: {
    width: {
      type: Number,
      default: 28,
    },
    minWidth: {
      type: Number,
      default: 18,
    },
    dialogueRightLevelPosition: {
      type: Number,
      default: 10,
    },
    position: {
      type: String,
      default: "left",
    },
    customDialogue: Object,
    menuID: String,
    icon: String,
    backgroundColor: {
      type: String,
      default: "#FFFFFF",
    },
    menuStyle: Object,
  },
  mounted() {
    this.live2dMenu = new tools(
      this.$refs.live2dMenu,
      this.minWidth,
      this.width,
      this.position,
      this.backgroundColor,
      this.customDialogue,
      this.dialogueRightLevelPosition
    );
  },
  methods: {
    showMessage(remark, time = 5000) {
      this.live2dMenu.showMessage(remark);
      this.live2dMenu.hideMessage(time);
    },
  },
  computed: {
    menuListeners() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        click(event) {
          vm.$emit("click", event);
        },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
@import  '../assets/icon/iconfont.css'
.live2d-menu {
  margin: 2px 0;
  cursor: pointer;
  text-align: center;
  min-height: 24px;
  widows 24px;
  line-height: 24px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  transition: all 0.2s;
 border-radius 16px
}
.iconfont {
  display: block;
  color: #5b6c7d;
    line-height: 22px;
   
}
.right-msg {
  display: inline-block;
  transform: rotate(180deg);
}
</style>
