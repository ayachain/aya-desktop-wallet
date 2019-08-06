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
      <div class="card" v-for="(item, index) in cards" :key="index" :style="item.margin">
        <img src="../../assets/earth.png" />
        <div>
          <span class="xlight">{{ item.name }}</span>
          <span class="xlight">
            {{ item.amount }}
            <span>AC</span>
          </span>
          <span class="xlight">{{ item.address }}</span>
        </div>
        <i :class="item.lock"></i>
      </div>
    </section>
    <p class="book" style="margin-top: 30px;">All History</p>
    <ul v-infinite-scroll="load" infinite-scroll-disabled="disabled" style="margin-top: 25px">
      <li v-for="(item, index) in tableData" :key="index" :class="item.class">
        <p class="date">
          <span class="xlight" v-for="(item, index) in item.date" :key="index">{{ item }}</span>
        </p>
        <div class="userinfo">
          <p class="xlight">{{ item.userName }}</p>
          <p>
            <img src="../../assets/earth.png" />
            <span class="xlight">{{ item.from }}</span>
            <i class="iconfont icon-arrow"></i>
            <img src="../../assets/earth.png" />
            <span class="xlight">{{ item.to }}</span>
          </p>
        </div>
        <p class="price">
          <span class="light">{{ item.amount }}</span>
          <span class="light">{{ item.gas }}</span>
        </p>
        <el-button type="text" class="xlight">{{ item.operate }}</el-button>
      </li>
    </ul>
    <p v-if="loading" style="text-align:center">加载中...</p>
    <p v-if="noMore" style="text-align:center">没有更多了</p>
    <Dialog :is-open="dialog" @close="getState"></Dialog>
  </div>
</template>

<script>
import Dialog from '../public/dialog'
import KeyStoreApi from '../../aya-core-api/keystore'

export default {
  name: 'wallet',
  components: { Dialog },
  data () {
    return {
      loading: false,
      dialog: false,
      scrollTop: 0,
      api: new KeyStoreApi(this.$defaultProvoid),
      cards: [
        {
          name: 'Name',
          amount: '1135.00',
          address: '0x212785315455451...',
          lock: 'iconfont icon-lock',
          margin: 'margin-right: 20px;'
        },
        {
          name: 'Name',
          amount: '1135.00',
          address: '0x212785315455451...',
          lock: 'iconfont icon-unlock',
          margin: 'margin-right: 20px;'
        },
        {
          name: 'Name',
          amount: '1135.00',
          address: '0x212785315455451...',
          lock: 'iconfont icon-lock',
          margin: 'margin-right: 20px;'
        },
        {
          name: 'Name',
          amount: '1135.00',
          address: '0x212785315455451...',
          lock: 'iconfont icon-unlock'
        },
        {
          name: 'Name',
          amount: '1135.00',
          address: '0x212785315455451...',
          lock: 'iconfont icon-lock',
          margin: 'margin-right: 20px;'
        },
        {
          name: 'Name',
          amount: '1135.00',
          address: '0x212785315455451...',
          lock: 'iconfont icon-unlock',
          margin: 'margin-right: 20px;'
        }
      ],
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
  computed: {
    noMore () {
      return this.tableData.length >= 20
    },
    disabled () {
      return this.loading || this.noMore
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
  mounted () {
    this.api.list().then(result => {
      console.log(result)
    }).catch(err => {
      console.error(err)
    })
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.test.forEach(item => {
          this.tableData.push(item)
        })
        this.loading = false
      }, 1000)
    },
    getState (state) {
      this.dialog = state
    }
  }
}
</script>

<style lang='less' scoped>
.price {
  width: 515px;
  height: 100%;
  padding: 21px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  span:nth-of-type(1) {
    color: #969696;
    font-size: 18px;
  }
  span:nth-of-type(2) {
    color: #aaaaaa;
    font-size: 14px;
  }
}

.userinfo {
  width: 465px;
  height: 100%;
  padding: 15px 0;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  color: #696969;
  .xlight {
    font-size: 12px;
  }
  p {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 24px;
    height: 24px;
  }
  i {
    color: #777777;
    font-size: 35px;
  }
}

.date {
  width: 81px;
  height: 100%;
  padding: 15px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  .xlight {
    color: #777777;
  }
  .xlight:nth-of-type(1) {
    font-size: 12px;
  }
  .xlight:nth-of-type(2) {
    font-size: 30px;
  }
}

.li {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #e6e2e2;
  background-color: #f1f1f1;
}

.green {
  border-left: 6px solid #39b54a;
}

.red {
  border-left: 6px solid #f90000;
}

.orange {
  border-left: 6px solid #f48d1f;
}

ul,
li {
  list-style: none;
}

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
