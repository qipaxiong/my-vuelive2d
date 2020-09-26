<template>
    <div class="live2d-message" :id="messageID" :style="messageStyle" ref="live2dMessage">
    </div>
</template>

<script>
import dialogue from './../lib/dialogue'

export default {
    name: 'mylive2dMessage',
    props:{
        messageID: String,//id
        messageStyle: Object,//样式
        customDialogue: Object //消息内容
    },
    data() {
      return {
        dialogueModul:''
      }
    },
    mounted(){
      //初始化消息
      this.dialogueModul = new dialogue(this.$refs.live2dMessage,this.customDialogue)
    },
    methods:{
      showMessage(remark,time=5000){
        this.dialogueModul.showMessage(remark,time)
          .then(()=>this.dialogueModul.hideMessage(time))
      }
    }
}
</script>

<style lang='stylus' scoped>

.live2d-message
  opacity: 0  
  width: 250px
  height: 70px 
  min-height: 60px
  margin: 0 0 -25px 20px 
  padding: 5px 10px
  overflow: hidden
  border: 1px solid rgba(224,186,140,0.8)
  border-radius: 12px
  background-color: rgba(236,217,188,0.8)
  box-shadow: 0 3px 15px 2px rgba(191,158,118,0.2)
  font-size: 12px
  line-height: 20px
  color: #555
  text-overflow: ellipsis
  animation common-animation 50s ease-in-out 5s infinite

@keyframes common-animation 
  2%
    transform: translate(.5px,-1.5px) rotate(-.5deg)
  4% 
    transform: translate(.5px,1.5px) rotate(1.5deg)
  6% 
    transform: translate(1.5px,1.5px) rotate(1.5deg)
  8%
    transform: translate(2.5px,1.5px) rotate(.5deg)
  10%
    transform: translate(.5px,2.5px) rotate(.5deg)
  12%
    transform: translate(1.5px,1.5px) rotate(.5deg)
  14%
    transform: translate(.5px,.5px) rotate(.5deg)
  16%
    transform: translate(-1.5px,-.5px) rotate(1.5deg)
  18%
    transform: translate(.5px,.5px) rotate(1.5deg)
  20%
    transform: translate(2.5px,2.5px) rotate(1.5deg)
  22%
    transform: translate(.5px,-1.5px) rotate(1.5deg)
  24%
    transform: translate(-1.5px,1.5px) rotate(-.5deg)
  26%
    transform: translate(1.5px,.5px) rotate(1.5deg)
  28%
    transform: translate(-.5px,-.5px) rotate(-.5deg)
  30%
    transform: translate(1.5px,-.5px) rotate(-.5deg)
  32%
    transform: translate(2.5px,-1.5px) rotate(1.5deg)
  34%
    transform: translate(2.5px,2.5px) rotate(-.5deg)
  36%
    transform: translate(.5px,-1.5px) rotate(.5deg)
  38%
    transform: translate(2.5px,-.5px) rotate(-.5deg)
  40%
    transform: translate(-.5px,2.5px) rotate(.5deg)
  42%
    transform: translate(-1.5px,2.5px) rotate(.5deg)
  44%
    transform: translate(-1.5px,1.5px) rotate(.5deg)
  46%
    transform: translate(1.5px,-.5px) rotate(-.5deg)
  48%
    transform: translate(2.5px,-.5px) rotate(.5deg)
  50%
    transform: translate(-1.5px,1.5px) rotate(.5deg)
  52%
    transform: translate(-.5px,1.5px) rotate(.5deg)
  54%
    transform: translate(-1.5px,1.5px) rotate(.5deg)
  56%
    transform: translate(.5px,2.5px) rotate(1.5deg)
  58%
    transform: translate(2.5px,2.5px) rotate(.5deg)
  60%
    transform: translate(2.5px,-1.5px) rotate(1.5deg)
  62%
    transform: translate(-1.5px,.5px) rotate(1.5deg)
  64%
    transform: translate(-1.5px,1.5px) rotate(1.5deg)
  66%
    transform: translate(.5px,2.5px) rotate(1.5deg)
  68%
    transform: translate(2.5px,-1.5px) rotate(1.5deg)
  70%
    transform: translate(2.5px,2.5px) rotate(.5deg)
  72%
    transform: translate(-.5px,-1.5px) rotate(1.5deg)
  74%
    transform: translate(-1.5px,2.5px) rotate(1.5deg)
  76%
    transform: translate(-1.5px,2.5px) rotate(1.5deg)
  78%
    transform: translate(-1.5px,2.5px) rotate(.5deg)
  80%
    transform: translate(-1.5px,.5px) rotate(-.5deg)
  82%
    transform: translate(-1.5px,.5px) rotate(-.5deg)
  84%
    transform: translate(-.5px,.5px) rotate(1.5deg)
  86%
    transform: translate(2.5px,1.5px) rotate(.5deg)
  88%
    transform: translate(-1.5px,.5px) rotate(1.5deg)
  90%
    transform: translate(-1.5px,-.5px) rotate(-.5deg)
  92%
    transform: translate(-1.5px,-1.5px) rotate(1.5deg)
  94%
    transform: translate(.5px,.5px) rotate(-.5deg)
  96%
    transform: translate(2.5px,-.5px) rotate(-.5deg)
  98%
    transform: translate(-1.5px,-1.5px) rotate(-.5deg)
  0%, 100%
    transform: translate(0,0) rotate(0)
</style>

