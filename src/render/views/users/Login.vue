<style lang="less">
.login {
  width: 100%;
  border-radius: 5px;
  .login-tap {
    margin-top: 20px;
    .center-container {
      text-align: center;
      .qrcode {
        width: 160px;
      }
      h2 {
        margin-top: 20px;
        font-weight: bold;
      }
      .icon {
        width: 90px;
        display: inline-block;
        margin-top: 20px;
      }
      .use-input {
        display: block;
        width: 240px;
        margin: 0 auto;
        margin-top: 20px;
      }
    }
  }
}
</style>

<template>
  <div class="login">
    <UseHeard />
    <a-tabs type="card" class="login-tap">
      <a-tab-pane key="1" tab="扫码登录">
        <div class="center-container">
          <img :src="qrCode" class="qrcode" />
          <h2>手机钉钉扫码登录</h2>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="密码登录">
        <div class="center-container">
          <img :src="logo" class="icon" />
          <a-input
            addon-before="+86"
            v-model:value="userName"
            placeholder="请输入手机号..."
            class="use-input"
            size="large"
          />
          <a-input
            type="password"
            v-model:value="password"
            placeholder="选中摁回车会跳转到消息页"
            class="use-input"
            size="large"
            @pressEnter="passWordEnter"
          />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import {} from "vue";
import { useRouter } from 'vue-router'
import UseHeard from "../../components/heards/UseHeard.vue";
import qrCode from "../../assets/images/qrcode.png";
import logo from "../../assets/images/logo.ico";
const { remote } = require('electron')

export default {
  data() {
    return {
      qrCode,
      logo,
      userName: "",
      password: ""
    };
  },
  setup() {
    const router = useRouter()
    const passWordEnter = () => {
      if(remote.getCurrentWindow){
        remote.getCurrentWindow().setSize(1000, 800)
      }
      
      router.push('/message/')

    }

    return {
      passWordEnter
    };
  },
  // methods:{
  //   passWordEnter(){
  //     console.log(11111)
  //   }
  // },
  components: {
    UseHeard
  }
};
</script>
