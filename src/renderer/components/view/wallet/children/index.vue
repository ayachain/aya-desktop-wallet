<template>
  <div>
    <p class="book">
      Wallet
      <el-button
        @click="dialog = true"
        type="text"
        icon="el-icon-circle-plus-outline"
        class="xlight"
      >New wallet</el-button>
    </p>
    <section>
      <div @click="routerToDetail(item)" class="card" v-for="(item, index) in cards" :key="index" :style="item.margin">
        <img src="../../../../assets/earth.png" />
        <div>
          <span class="xlight">{{ item.name }}</span>
          <span class="xlight">
            {{ item.amount }}
            <span>AC</span>
          </span>
          <span class="xlight address">{{ item.address }}</span>
        </div>
        <i :class="item.lock"></i>
      </div>
    </section>
    <p class="book" style="margin-top: 30px;">All History</p>
    <History :data-core="tableData" :test="test"></History>
  </div>
</template>

<script>
import History from '../../../public/history'
import KeyStoreAPI from '../../../../aya-core-api/keystore'
import WalletAPI from '../../../../aya-core-api/wallet'

export default {
  name: 'wallet',
  components: { History },
  data () {
    return {
      scrollTop: 0,
      keystore: new KeyStoreAPI(this.$defaultProvide),
      wallet: new WalletAPI(this.$defaultProvide),
      cards: [],
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
  beforeRouteLeave (to, from, next) {
    this.scrollTop = document.querySelector('.el-main').scrollTop
    next()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      document.querySelector('.el-main').scrollTop = vm.scrollTop
    })
  },
  created () {
    this.init()
  },
  methods: {
    routerToDetail (data) {
      this.$router.push({
        path: '/home/wallet/detail',
        query: {
          name: data.name,
          address: data.address,
          amount: data.amount
        }
      })
    },
    async init () {
      let addressList = (await this.keystore.list()).data.Body
      for (let i = 0; i < addressList.length; i++) {
        let balance = (await this.wallet.balanceOf({
          arg: ['main', addressList[i]]
        })).data.Body.Avail / 1e8
        if ((i + 1) % 4 === 0) {
          this.cards.push({
            name: `account${i}`,
            amount: balance.toFixed(4),
            address: addressList[i],
            lock: 'iconfont icon-lock'
          })
        } else {
          this.cards.push({
            name: `account${i}`,
            amount: balance.toFixed(4),
            address: addressList[i],
            lock: 'iconfont icon-lock',
            margin: 'margin-right: 20px;'
          })
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
section {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
}

.book {
  color: #555555;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-button {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
}

.card {
  width: 270px;
  height: 100px;
  background-color: #f1f1f1;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 11px 14px 14px;
  margin-top: 19px;
  box-sizing: border-box;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    .xlight:nth-of-type(1) {
      color: #00a3ff;
    }
    .xlight:nth-of-type(2) {
      color: #646464;
      font-size: 24px;
      span {
        color: #9c9696;
        font-size: 16px;
      }
    }
    .xlight:nth-of-type(3) {
      color: #827a7a;
      font-size: 14px;
    }
  }
  .address {
    display: inline-block;
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .icon-lock {
    color: #00a3ff;
    font-size: 30px;
  }
  .icon-unlock {
    color: #9ea1a2;
    font-size: 35px;
  }
}
</style>
