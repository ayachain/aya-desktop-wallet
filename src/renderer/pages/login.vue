<template>
  <div>
    <div class="top">
      <section class="logo">
        <h2 class="xlight">Protect your account</h2>
        <i class="iconfont icon-lock"></i>
        <p class="xlight">Choose a password for your new account Make it as strong as if it were to protect your house keys!</p>
      </section>
      <section class="content" id="login_password">
        <el-input v-model="password" placeholder="please enter your password" show-password></el-input>
        <el-input v-model="repassword" placeholder="please enter your password again" show-password></el-input>
      </section>
    </div>
    <div class="bottom">
      <section>
        <el-link class="bold" :underline="false">BACK</el-link>
        <el-button class="bold" type="text" @click="createWallet">NEXT</el-button>
      </section>
    </div>
  </div>
</template>

<script>
import KeyStoreAPI from '../aya-core-api/keystore'

export default {
  data () {
    return {
      password: '',
      repassword: ''
    }
  },
  beforeCreate () {
    let address = localStorage.getItem('address')
    if (address) {
      this.$router.push({ path: '/home' })
    }
  },
  methods: {
    createWallet () {
      let api = new KeyStoreAPI(this.$defaultProvide)
      api.new('main').then(result => {
        localStorage.setItem('address', result.data.Body)
        this.$router.push({ path: '/home' })
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  width: 100%;
  height: 576px;
  display: flex;
  .logo {
    width: 629px;
    height: 100%;
    padding: 89px 120px 0 103px;
    box-sizing: border-box;
    h2 {
      height: 120px;
      font-size: 36px;
      font-weight: lighter;
      color: #878588;
    }
    i {
      font-size: 100px;
      display: flex;
      justify-content: center;
    }
    p {
      font-size: 24px;
      font-weight: bold;
      color: #070506;
    }
  }
  .content {
    width: calc(100% - 629px);
    height: 100%;
    padding: 190px 103px 0 0;
    box-sizing: border-box;
  }
}
.bottom {
  section {
    width: 100%;
    padding: 0 103px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bold {
      font-size: 24px;
    }
  }
}
</style>

<style lang="less">
#login_password .el-input__inner {
  color: #00a3ff;
  font-size: 20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px dashed #4891e3;
  margin-bottom: 20px;
}
</style>
