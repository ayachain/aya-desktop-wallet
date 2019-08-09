<template>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      background-color="#424242"
      text-color="#b2b0b1"
      active-text-color="#00a3ff"
    >
      <el-menu-item v-for="(item, index) in menus" @click="item.routerLint" :index="index.toString()" :key="index">
          <i :class="item.icon"></i>
      </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        menus: [
          {
            icon: 'iconfont icon-wallet',
            routerLint: () => this.$router.push({ path: '/home/wallet' })
          },
          {
            icon: 'iconfont icon-key',
            routerLint: () => {
              sessionStorage.setItem('scroll', document.querySelector('.el-main').scrollTop)
              this.$router.push({ path: '/home/key' })
            }
          },
          {
            icon: 'el-icon-mobile-phone',
            routerLint: () => this.$router.push({ path: '/home/phone' })
          },
          {
            icon: 'el-icon-setting'
          },
          {
            icon: 'iconfont icon-internet'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo {
    width: 59px;
    height: calc(100vh - 80px);
    li {
      padding: 0!important;
      height: 100px;
      line-height: 100px;
      text-align: center;
      i {
        font-size: 30px;
      }
      [class^='icon-key'] {
        font-size: 35px;
      }
    }
  }
</style>