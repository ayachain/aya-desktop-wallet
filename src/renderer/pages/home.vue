<template>
  <el-container>
    <el-header height="80px">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="59px">
        <Menu></Menu>
      </el-aside>
      <el-main id="main" height="calc(100vh - 80px)">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Header from '../components/public/header'
  import Menu from '../components/public/menu'

  export default {
    name: 'landing-page',
    components: { Header, Menu },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.el-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.el-header {
  padding: 0;
}
.el-aside {
  overflow: visible;
}
.el-main {
  padding-left: 30px;
  padding-right: 34px;
  padding-bottom: 0;
}
</style>
