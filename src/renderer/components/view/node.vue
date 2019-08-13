<template>
  <div>
    <h2 class="book">Peers</h2>
    <el-collapse id="collapse" v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Super (5/10)" active name="1">
        <div class="xlight" style="margin-top: 15px">
          <span>PID:QmX9s1TVMiP3u9k4ZRvqhu3fWXnVF6Q5hsBHV2oRwNsTka</span>
          <span>Block:12345678</span>
          <span style="color: #00a3ff">Self</span>
        </div>
        <div class="xlight">
          <span>PID:QmX9s1TVMiP3u9k4ZRvqhu3fWXnVF6Q5hsBHV2oRwNsTka</span>
          <span>Block:12345678</span>
          <span style="color: #32c03c">50ms</span>
        </div>
        <div class="xlight">
          <span>PID:QmX9s1TVMiP3u9k4ZRvqhu3fWXnVF6Q5hsBHV2oRwNsTka</span>
          <span>Block:12345678</span>
          <span style="color: #f1c100">200ms</span>
        </div>
        <div class="xlight" style="margin: 0">
          <span>PID:QmX9s1TVMiP3u9k4ZRvqhu3fWXnVF6Q5hsBHV2oRwNsTka</span>
          <span>Block:12345678</span>
          <span style="color: #e43312">500ms</span>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Master (5/10)" name="2">
        <div class="xlight" style="margin-top: 15px">
          <span>PID:QmX9s1TVMiP3u9k4ZRvqhu3fWXnVF6Q5hsBHV2oRwNsTka</span>
          <span>Block:12345678</span>
          <span style="color: #00a3ff">Self</span>
        </div>
        <div class="xlight" style="margin: 0">
          <span>PID:QmX9s1TVMiP3u9k4ZRvqhu3fWXnVF6Q5hsBHV2oRwNsTka</span>
          <span>Block:12345678</span>
          <span style="color: #32c03c">50ms</span>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Normal (5)" name="3">
        <div class="xlight" style="margin-top: 15px; margin-bottom: 0">
          <span>PID:QmX9s1TVMiP3u9k4ZRvqhu3fWXnVF6Q5hsBHV2oRwNsTka</span>
          <span>Block:12345678</span>
          <span style="color: #00a3ff">Self</span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
.book {
  font-size: 30px;
  font-weight: lighter;
  color: #555555;
  margin-bottom: 34px;
}
.xlight {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #8a8787;
  margin-bottom: 15px;
  span:nth-of-type(3) {
    width: 60px;
    text-align: right;
    display: inline-block;
    padding-right: 20px;
  }
}
</style>

<style lang="less">
#collapse {
  border-top: none;
  .el-collapse-item {
    float: left;
    width: 100%;
    margin-bottom: 10px;
  }
  .el-collapse-item__content {
    padding-bottom: 20px;
  }
  .el-collapse-item::before {
    content: '';
    float: left;
    display: inline-block;
    width: 18px;
    height: 51px;
    border-radius: 3px;
    background-color: #555555;
    margin-right: 20px;
  }
  .el-collapse-item::after {
    content: '';
    clear: both;
  }
  .el-collapse-item__header {
    font-family: 'xlight';
    font-size: 24px;
    color: #424242;
  }
}
</style>
