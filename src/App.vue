<template>
  <div id="app">
    <div class="back">
      <div class="live">
        <div
          class="live2d-panel"
          ref="live2dBox"
          @mousedown="mousedown"
          :v-if="live2dshow"
        >
          <!--看板娘头顶消息-->

          <mylive2dMessage
            :v-if="Dialogueshow"
            :customDialogue="customDialogue"
            ref="dialogue"
          ></mylive2dMessage>
          <!--看板娘本体-->
          <mylive2d
            class="myvuelive2d"
            :modelPath="modelPath"
            ref="l2dMange"
          ></mylive2d>
          <!--看板娘操作按钮-->
          <div class="tools-panel" v-if="live2dMenushow">
            <mylive2dMenu
              v-for="(item, index) in menuData"
              :key="index"
              v-if="item.show"
              :position="item.position"
              @click="toolsClick(item)"
              :width="item.width"
              :menuID="item.tabMsg"
              :icon="item.icon"
              :customDialogue="item.customDialogue"
              :backgroundColor="item.backgroundColor"
              ref="tool"
            ></mylive2dMenu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import custom from "./custom";

export default {
  name: "app",
  data() {
    return {
      modelPath: "", //看板娘模型json地址
      modelPaths: "",
      customDialogue: custom, //鼠标悬浮时的消息
      live2dshow: true, //看板娘是否显示
      live2dMenushow: true, //看板娘操作按钮是否显示
      Dialogueshow: false, //看板娘头顶消息是否显示
      drag: false, //看板娘是否可以拖动
      positionX: 0,
      positionY: 0,
      menuData: [
        {
          tabMsg: "home",
          icon: "icon-zhuye",
          backgroundColor: "",
          show: true,
          position: "right",
        },
        // {
        //   tabMsg: "dialogue",
        //   width: 280,
        //   customDialogue: custom,
        //   show: true,
        //   position: "right",
        // },
        {
          tabMsg: "change",
          icon: "icon-skin",
          backgroundColor: "",
          show: true,
          position: "right",
        },
        {
          tabMsg: "save",
          icon: "icon-scrm-app-icon_huabanfuben",
          backgroundColor: "",
          show: true,
          position: "right",
        },
        {
          tabMsg: "about",
          icon: "icon-about",
          backgroundColor: "",
          show: true,
          position: "right",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      // fetch(
      //   "https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=28&encode=json"
      // )
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (!this.isDialogue) {
      //       let tool = this.$refs.tool.filter((item) => {
      //         return item.customDialogue;
      //       });
      //       if (tool && tool.length > 0) tool[0].showMessage(data.hitokoto);
      //     } else {
      //       this.$refs.dialogue.showMessage(data.hitokoto);
      //     }
      //   });
    }, 30000);
    this.modelPath = "model/histoire/model.json";
    setTimeout(() => {
      this.modelPaths = "model/nep/model.json";
    }, 2000);
  },
  methods: {
    //看板娘操作按钮方法
    toolsClick(item) {
      switch (item.tabMsg) {
        case "home":
          //这里可以写返回顶部或者首页的操作
          break;
        case "change":
          //这个是换衣服地址
          // this.$refs.l2dMange.setImgPath(
          //     "model/histoire/histoire.1024/texture_02.png"
          // );
          break;
        case "save":
          this.$refs.l2dMange.save(`live2d-${Date.now()}.png`);
          break;
        case "about":
          window.open("https://github.com/qipaxiong/my-vuelive2d");
          break;
        case "hide":
          this.live2dshow = false;
          this.toolsDisplay("hide");
          break;
        case "show":
          this.live2dshow = true;
          this.toolsDisplay("show");
          break;
      }
    },
    toolsDisplay(display) {
      for (let i = 0, len = this.menuData.length; i < len; i++) {
        let tabMsg = this.menuData[i].tabMsg;
        if (display === "hide") {
          if (tabMsg === "home" || tabMsg === "about") continue;
          this.menuData[i].show = false;
          if (tabMsg === "hide") {
            this.menuData[i].show = true;
            this.menuData[i].tabMsg = "show";
          }
        } else {
          this.menuData[i].show = true;
          if (tabMsg === "show") this.menuData[i].tabMsg = "hide";
        }
      }
    },
    //鼠标点击拖动
    mousedown(e) {
      if (this.drag) {
        let odiv = this.$refs.live2dBox; //获取目标元素
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop;
        //可视区域狂傲
        var Ch = document.documentElement.clientHeight;
        var Cw = document.documentElement.clientWidth;
        document.onmousemove = (e) => {
          //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;

          //绑定元素位置到positionX和positionY上面
          this.positionX = top;
          this.positionY = left;

          //移动当前元素
          odiv.style.left = left + "px";
          odiv.style.top = top + "px";
          if (left <= 0) {
            odiv.style.left = 0;
          } else if (left >= Cw - odiv.offsetWidth) {
            odiv.style.left = Cw - odiv.offsetWidth + "px";
          }
          if (odiv.offsetTop < 0) {
            odiv.style.top = 0;
          } else if (top >= Ch - odiv.offsetHeight) {
            odiv.style.top = Ch - odiv.offsetHeight + "px";
          }
        };
        document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    },
    //鼠标点击随机移动
    float(e) {
      var temp = Math.random();
      var i = Math.floor(Math.random());

      let odiv = this.$refs.live2dBox; //获取目标元素
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      let left = e.clientX - disX;
      let top = e.clientY - disY;
      var Ch = document.documentElement.clientHeight;
      var Cw = document.documentElement.clientWidth;
      var i1 = Math.floor(Math.random() * left);
      var i2 = Math.floor(Math.random() * top);
      console.log(i1);
      console.log(i2);
      // //移动当前元素
      odiv.style.left = i1 + "px";
      odiv.style.top = i2 + "px";
      if (left <= 0) {
        odiv.style.left = 0;
      } else if (left >= Cw - odiv.offsetWidth) {
        odiv.style.left = Cw - odiv.offsetWidth + "px";
      }
      if (odiv.offsetTop < 0) {
        odiv.style.top = 0;
      } else if (top >= Ch - odiv.offsetHeight) {
        odiv.style.top = Ch - odiv.offsetHeight + "px";
      }
    },
  },
};
</script>

<style scoped>
.back {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(assets/bg.4ad07e23.png);
  min-height: 1300px;
  position: fixed;
  width: 100%;
  background-size: cover !important;
  overflow: hidden;
}

.live {
  z-index: 2000;
  position: relative;
}
.live2d-panel {
  width: 294px;
  height: 302px;
  position: fixed;
  right: 0;
  bottom: 42px;
}
.tools-panel {
  position: absolute;
  right: 20px;
  bottom: 0;
  max-width: 45px;
  z-index: 2002;
}
.myvuelive2d {
  animation: drop 4s ;
}
@keyframes drop {
  0% {
    
    transform: translateY(-2000px);
  }
  30% {
    
    transform: translateY(-1000px);
  }
  50% {
    
    transform: translateY(-800px);
  }
  70% {
    transform: translateY(80px);
    
  }
  90% {
    transform: translateY(-20px);
    
  }
}
</style>
