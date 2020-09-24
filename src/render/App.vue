<template>
  <h1>vue3</h1>
  <a-card title="Card title" :bordered="false" style="width: 300px">
   <h1>hello antd-vue</h1>
    <a-button>按钮测试</a-button>
  </a-card>

  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
