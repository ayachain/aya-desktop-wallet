<template>
  <div class="box">
    <div class="left">
      <img src="../../assets/win.png" />
      <span class="xlight">Main</span>
    </div>
    <div class="right">
      <i class="iconfont icon-node"></i>
      <span class="xlight">Super</span>
      <i class="iconfont icon-lock"></i>
    </div>
    <el-button-group>
      <el-button
        v-for="(item, index) in buttons"
        :key="index"
        size="mini"
        @click="item.callback"
        :class="item.icon"
        :disabled="item.disabled"
      ></el-button>
    </el-button-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ipc: require('electron').ipcRenderer,
        buttons: [
          {
            icon: 'el-icon-minus',
            callback: () => {
              this.ipc.send('min')
            }
          },
          {
            icon: 'el-icon-copy-document',
            disabled: true
          },
          {
            icon: 'el-icon-close',
            callback: () => {
              this.ipc.send('close')
            }
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
    .box {
      width: 100vw;
      height: 80px;
      background: #424242;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #525252;
      padding: 17px 140px 15px 12px;
      box-sizing: border-box;
      // 设置可拖动
      -webkit-app-region: drag;
      .left {
        width: 172px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
      }
      .right {
        width: 168px;
        display: flex;
        align-items: center;
        .icon-node {
          font-size: 35px;
          color: #00a3ff;
        }
        .xlight {
          font-size: 18px;
          margin-left: 15px;
        }
        .icon-lock {
          font-size: 30px;
          margin-left: 30px;
        }
      }
    }
    .xlight {
      letter-spacing: 3px;
    }
    .el-button-group {
      top: 0;
      right: 0;
      position: fixed;
      // 禁止可拖动
      -webkit-app-region: no-drag;
      .el-button {
        padding: 0;
        width: 28px;
        height: 24px;
        border-top: 0;
        font-size: 12px;
        border-radius: 0;
        color: #a8a8a8;
        border-color: #636363;
        background-color: transparent;
      }
      .el-icon-close {
        border-right: 0;
      }
      .el-icon-copy-document {
        color: #636363;
      }
      .el-button:hover {
        background-color: #636363;
      }
      .el-icon-copy-document:hover {
        color: #636363;
        border-color: #636363;
        background-color: transparent;
      }
    }
</style>