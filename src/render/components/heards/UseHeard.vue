<style lang="less">

.use-heard{
  @height:42px;
  width: 100%;
  height:  @height;
  line-height: @height;
  background-color: rgb(#4AA2FA);
  padding:0 20px;
  font-size: 18px;
  color: #D8ECFE;
  display: flex;
  // -webkit-app-region: drag;
  .icon-group{
    text-align: right;
    flex-grow:10;
    .icon{
      display: inline-block;
      width: 12px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div class="use-heard">
    <span>钉钉</span>
    <div class="icon-group">
      <img :src="line" class="icon" @click="minsize">
      <img :src="fork" class="icon" @click="close">
    </div>
  </div>
</template>

<script>
import {watchEffect} from 'vue'
import line  from '../../assets/images/line.svg'
import fork  from '../../assets/images/fork.svg'
const { remote } = require('electron')
export default {
  data(){
    return {
      line,
      fork
    }
  },
  setup(){
    const minsize = () => {
      remote.getCurrentWindow().minimize()
    }
    const close = () => {
      remote.getCurrentWindow().close()
    }
    return { 
      minsize,
      close
    }
  },
  components:{
  }
}
</script>
