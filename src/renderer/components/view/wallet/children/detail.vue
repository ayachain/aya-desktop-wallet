<template>
  <div>
    <section class="header-box">
      <div class="left">
        <img src="../../../../assets/earth.png" />
        <div>
          <h2 class="light">{{ name }}</h2>
          <span class="xlight">{{ address }}</span>
          <span class="xlight">{{ amount }} AC</span>
        </div>
      </div>
      <div class="right" id="right">
        <el-button @click="dialog = true" class="xlight" type="text" icon="iconfont icon-transfer">
          <span>Transfer</span>
          <span>accounts</span>
        </el-button>
        <el-button @click="copy" class="xlight" type="text" icon="el-icon-document-copy">
          <span>Copy</span>
          <span>address</span>
        </el-button>
        <el-button class="xlight" type="text" icon="iconfont icon-scan">
          <span>Show</span>
          <span>QR-code</span>
        </el-button>
      </div>
    </section>
    <section class="text">
      <h3 class="light">Note</h3>
      <span class="xlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
    </section>
    <p class="book">Current History</p>
    <span class="xlight secdTitle">filter transactions</span>
    <History :data-core="tableData" :test="test"></History>
    <Dialog
      :is-open="dialog"
      :from="address"
      @close="getState"
    ></Dialog>
  </div>
</template>

<script>
import Dialog from '../../../public/dialog'
import History from '../../../public/history'

export default {
  components: { Dialog, History },
  data () {
    return {
      clipboard: require('electron').clipboard,
      dialog: false,
      name: '',
      address: '',
      amount: 0.00,
      tableData: [
        {
          class: 'li green',
          date: ['Jan', '26'],
          userName: 'Transfer accounts',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '+1000.00 AC',
          gas: '0.006 AC',
          operate: 'Queue'
        },
        {
          class: 'li red',
          date: ['Feb', '16'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Miining'
        },
        {
          class: 'li orange',
          date: ['Mar', '06'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Packing'
        },
        {
          class: 'li green',
          date: ['Jan', '26'],
          userName: 'Transfer accounts',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '+1000.00 AC',
          gas: '0.006 AC',
          operate: 'Queue'
        },
        {
          class: 'li red',
          date: ['Feb', '16'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Miining'
        },
        {
          class: 'li orange',
          date: ['Mar', '06'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Packing'
        },
        {
          class: 'li green',
          date: ['Jan', '26'],
          userName: 'Transfer accounts',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '+1000.00 AC',
          gas: '0.006 AC',
          operate: 'Queue'
        },
        {
          class: 'li red',
          date: ['Feb', '16'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Miining'
        },
        {
          class: 'li orange',
          date: ['Mar', '06'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Packing'
        },
        {
          class: 'li green',
          date: ['Jan', '26'],
          userName: 'Transfer accounts',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '+1000.00 AC',
          gas: '0.006 AC',
          operate: 'Queue'
        }
      ],
      test: [
        {
          class: 'li green',
          date: ['Jan', '26'],
          userName: 'Transfer accounts',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '+1000.00 AC',
          gas: '0.006 AC',
          operate: 'Queue'
        },
        {
          class: 'li red',
          date: ['Feb', '16'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Miining'
        },
        {
          class: 'li orange',
          date: ['Mar', '06'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Packing'
        },
        {
          class: 'li green',
          date: ['Jan', '26'],
          userName: 'Transfer accounts',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '+1000.00 AC',
          gas: '0.006 AC',
          operate: 'Queue'
        },
        {
          class: 'li red',
          date: ['Feb', '16'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Miining'
        },
        {
          class: 'li orange',
          date: ['Mar', '06'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Packing'
        },
        {
          class: 'li green',
          date: ['Jan', '26'],
          userName: 'Transfer accounts',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '+1000.00 AC',
          gas: '0.006 AC',
          operate: 'Queue'
        },
        {
          class: 'li red',
          date: ['Feb', '16'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Miining'
        },
        {
          class: 'li orange',
          date: ['Mar', '06'],
          userName: 'sent',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '-1000.00 AC',
          gas: '0.006 AC',
          operate: 'Packing'
        },
        {
          class: 'li green',
          date: ['Jan', '26'],
          userName: 'Transfer accounts',
          from: '0x12345678...998765432124578',
          to: '0x12345678...998765432124578',
          amount: '+1000.00 AC',
          gas: '0.006 AC',
          operate: 'Queue'
        }
      ]
    }
  },
  created () {
    const params = this.$route.query
    this.name = params.name
    this.address = params.address
    this.amount = params.amount
  },
  methods: {
    getState (state) {
      this.dialog = state
    },
    copy () {
      this.clipboard.writeText(this.address)
      this.$message({
        message: '复制成功',
        type: 'success',
        offset: 100
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header-box {
  width: 100%;
  display: flex;
  .left {
    width: 400px;
    margin-right: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 64px;
      height: 64px;
    }
    div {
      width: calc(100% - 76px);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .light {
        color: #00a3ff;
        font-size: 36px;
        font-weight: lighter;
      }
      .xlight:nth-of-type(1) {
        font-size: 14px;
        color: #696969;
      }
      .xlight:nth-of-type(2) {
        font-size: 24px;
        color: #a5a0a0;
      }
    }
  }
  .right {
    width: 250px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .el-button {
      padding: 0;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      span {
        height: 15px;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}

.text {
  width: 955px;
  padding-top: 45px;
  color: #a5a0a0;
  box-sizing: border-box;
  .light {
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 20px;
  }
  .xlight {
    font-size: 18px;
  }
}

.book {
  color: #555555;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 22px;
  box-sizing: border-box;
}

.secdTitle {
  font-size: 18px;
  color: #ccc6c6;
  border-bottom: 1px solid #e3e3e3;
  padding: 0px 4px 7px 7px;
  box-sizing: border-box;
}
</style>

<style lang="less">
#right {
  i {
    font-size: 25px;
    font-weight: lighter;
  }
}
</style>
