<template>
  路由demo1
  <router-link to='/routerDemoTwo'>去第二页</router-link>  
</template>

<script>
import { watchEffect } from 'vue'
const fs = require('fs')
export default {
  setup(){
    watchEffect(() => {
      console.log(fs)
    })
  }
}
</script>

