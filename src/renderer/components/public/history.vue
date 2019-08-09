<template>
  <div>
    <ul v-infinite-scroll="load" infinite-scroll-disabled="disabled" style="margin-top: 25px">
      <li v-for="(item, index) in dataCore" :key="index" :class="item.class">
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
  </div>
</template>

<script>
export default {
  props: ['dataCore', 'test'],
  data () {
    return {
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.dataCore.length >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.test.forEach(item => {
          this.dataCore.push(item)
        })
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>
