<template>
  <el-dialog id="dialog" center :title="title" :visible.sync="isOpen" :width="width" :before-close="close">
    <section id="sendDialog">
      <el-form label-position="top" label-width="80px" :model="formLabelAlign">
        <el-form-item label="From" id="from">
          <el-input v-model="formLabelAlign.name" @focus="focus" @blur="blur">
            <img slot="prepend" src="../../assets/earth.png">
          </el-input>
        </el-form-item>
        <el-form-item label="To" id="to">
          <el-input v-model="formLabelAlign.region" @focus="focus" @blur="blur">
            <img slot="prepend" src="../../assets/earth.png">
          </el-input>
        </el-form-item>
        <el-form-item label="Amount" id="amount">
          <el-input
            v-model="formLabelAlign.type"
            @focus="focus('', $event)"
            @blur="blur('', $event)"
          >
            <template slot="append">AC</template>
          </el-input>
        </el-form-item>
        <el-form-item id="fee" style="margin-right: 50px" label="Fee">
          <el-input
            value="0.058"
            readonly="readonly"
          >
            <template slot="append">AC</template>
          </el-input>
        </el-form-item>
      </el-form>
      <p
        class="xlight"
        style="color: #9f9f9f; font-size: 12px"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      <section slot="footer" class="dialog-footer xlight" style="margin-top: 20px; text-align: center;">
        <el-button @click="toggleDialog" style="width:140px;height:40px;font-size:20px" type="primary">Send</el-button>
      </section>
    </section>
    <section id="confirmDialog">
      <section class="confirm-section">
        <div>
          <img src="../../assets/earth.png">
          <span class="xlight">0x12345678...998765432123578</span>
          <span class="light">From</span>
        </div>
        <i class="iconfont icon-arrow"></i>
        <div>
          <img src="../../assets/earth.png">
          <span class="xlight">0x12345678...998765432123578</span>
          <span class="light">To</span>
        </div>
      </section>
      <ul class="confirm-ul">
        <li class="book"><span>Amount</span><span>Steps</span></li>
        <li class="xlight"><span>10000.00 AC</span><span>20000 S</span></li>
        <li class="book"><span>Fee</span><span>Prices</span></li>
        <li class="xlight"><span>0.058 AC</span><span>0.0001 AC</span></li>
      </ul>
      <section class="confirm-data">
        <span class="book">Data</span>
        <span class="xlight">0x123718927389172489178974879872893718927398AABBBCCD65a4sdxzc564asAABBBCCDDAADSDFEFAFA89172489178974879872893718927398AABBBCCD</span>
      </section>
      <p class="confirm-total">
        <span class="book">Total</span>
        <span class="medium">- 10000.512 AC</span>
      </p>
      <section class="confirm-footer">
        <div>
          <i class="iconfont icon-key"></i>
          <input class="xlight" placeholder="Enter password to Confirm the transaction" type="text">
        </div>
        <section>
          <el-button type="text">cancel</el-button>
          <el-button type="primary">Confirm</el-button>
        </section>
      </section>
    </section>
  </el-dialog>
</template>

<script>
export default {
  props: ['isOpen'],
  data () {
    return {
      title: 'Transfer accounts',
      width: '802px',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    toggleDialog () {
      this.title = 'Confirmation'
      setTimeout(() => {
        this.width = '542px'
      }, 100)
      this.$('#sendDialog').fadeToggle(100, 'hide')
      this.$('#confirmDialog').fadeToggle(100, 'show')
    },
    close () {
      this.$emit('close', false)
      setTimeout(() => {
        this.title = 'Transfer accounts'
        this.width = '802px'
        this.$('#sendDialog').fadeToggle(100, 'show')
        this.$('#confirmDialog').fadeToggle(100, 'hide')
      }, 200)
    },
    focus (prev, next) {
      if (next) {
        next.target.nextElementSibling.style.borderColor = '#409eff'
        return
      }
      prev.target.previousElementSibling.style.borderColor = '#409eff'
    },
    blur (prev, next) {
      if (next) {
        next.target.nextElementSibling.style.borderColor = '#DCDFE6'
        return
      }
      prev.target.previousElementSibling.style.borderColor = '#DCDFE6'
    }
  }
}
</script>

<style lang="less" scoped>
#confirmDialog {
  display: none;
  .confirm-footer {
    div {
      padding: 6px 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ebebeb;
      display: flex;
      align-items: center;
      i {
        color: #e3e3e3;
        font-size: 30px;
      }
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 14px;
      }
      input::-webkit-input-placeholder {
        color: #c6c6c6;
      }
    }
    section {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 20px;
    }
  }
  .confirm-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
    .book {
      font-size: 14px;
      color: #939393;
    }
    .medium {
      font-size: 18px;
      color: #c60707;
    }
  }
  .confirm-data {
    width: 100%;
    height: 84px;
    padding-bottom: 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .book {
      font-size: 14px;
      color: #939393;
    }
    .xlight {
      font-size: 12px;
      color: #818181;
    }
  }
  .confirm-ul {
    width: 100%;
    height: 84px;
    padding-top: 25px;
    padding-bottom: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      height: 100%;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .book {
      color: #939393;
      align-items: flex-start;
    }
    .xlight {
      color: #777777;
      align-items: flex-end;
    }
  }
  .confirm-section {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 28px;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .xlight {
        font-size: 14px;
        color: #696969;
      }
      .light {
        font-size: 14px;
        color: #02a8f3;
      }
    }
    i {
      font-size: 30px;
      color: #05a5ff;
      font-weight: bold;
      padding-top: 20px;
      box-sizing: border-box;
    }
  }
}
.el-form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.el-input {
  width: 360px;
  height: 50px;
  img {
    width: 32px;
    height: 32px;
  }
}
</style>

<style lang="less">
#dialog {
  overflow: visible;
  .el-dialog {
    transition: width .1s linear;
  }
  #sendDialog {
    transition: all .1s linear;
  }
  #confirmDialog {
    transition: all .1s linear;
  }
  .el-dialog__title {
    font-family: 'xlight';
    color: #02a8f3;
    font-size: 30px;
  }
}
#sendDialog {
  .el-form-item__label {
    font-family: 'xlight';
    color: #a5a0a0;
    font-size: 18px;
  }
  .el-input__inner {
    font-family: 'xlight';
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }
  .el-input-group__prepend, .el-input-group__append {
    font-family: 'xlight';
    font-size: 20px;
    color: #a5a0a0;
    padding: 0 10px;
    background-color: #f6f5f4;
  }
  .el-input-group--prepend {
    .el-input__inner {
      border-left: 0;
      background-color: #f6f5f4;
    }
  }
  .el-input-group--append {
    .el-input__inner {
      border-right: 0;
      background-color: #f6f5f4;
    }
  }
  #fee {
    .el-input__inner, .el-input-group__append {
      border: 0;
      background-color: #fff !important;
    }
  }
}
</style>

