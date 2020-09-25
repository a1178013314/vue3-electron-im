<style lang="less" scoped>
</style>

<template>
  路由demo1
  <h1>vue3</h1>
  <a-card title="Card title" :bordered="false" style="width: 300px">
    <h1>hello antd-vue</h1>
    <a-button @click="callMain">访问主进程</a-button>
  </a-card>

  <router-link to="/routerDemoTwo">去第二页</router-link>
</template>

<script>
import { watchEffect } from "vue";
const { remote } = require("electron");

export default {
  setup() {
    watchEffect(() => {});
    function callMain() {
        const demo = remote.require("./callDemo");

        console.log("访问主进程", remote);
        console.log("访问主进程", demo.sum(1, 2));
        remote.getCurrentWindow().webContents.openDevTools();
    }

    return {
      callMain
    };
  }
};
</script>



