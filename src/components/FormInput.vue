<template>
  <div class="formInput">
    <div class="text-input">
      <input type="text" placeholder="姓名" v-model="checkedName" required>
    </div>
    <div class="text-input">
      <select v-model="checkeType">
        <option v-for="option in options" :key="option.text" :value="option.value">{{option.text}}</option>
      </select>
    </div>
    <div class="text-input" v-show="checkeType===true">
      <input type="date" placeholder="加入日期" v-model="checkedDate" :class="{full:checkedDate}">
    </div>
    <div class="generate_all">
      <span class="error" v-text="error"></span>
      <span class="generate" @click="generate">立即生成</span>
      <span class="info">青年汇</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedName: null,
      checkeType: true,
      checkedDate: null,
      error: "",
      options: [
        {
          text: "我是社工",
          value: true
        },
        {
          text: "我是社工支持者",
          value: false
        }
      ]
    };
  },
  methods: {
    generate() {
      if (this.checkeType) {
        if (!this.checkedDate) {
          this.error = "请选择日期";
          setTimeout(() => {
            this.error = "";
          }, 2000);
        }
      }
      if (!this.checkedName) {
        this.error = "请输入姓名";
        setTimeout(() => {
          this.error = "";
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.formInput {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .text-input {
    width: 272px;
    height: 36px;
    padding-top: 12px;
    overflow: hidden;
  }
  input,
  select {
    border: none;
    background: #fafafa;
    color: #999999;
    width: 272px;
    height: 36px;
    outline: none;
    font-size: 12px;
    text-indent: 10px;
    -moz-appearance: none;
    -webkit-appearance: none;
    &::placeholder {
      color: #999999;
    }
  }
  input[type="date"]:before {
    color: #999999;
    content: attr(placeholder);
  }
  input[type="date"].full {
    text-indent: 5px;
  }
  input[type="date"].full:before {
    color: #999999;
    content: "" !important;
  }
  .generate_all {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    .error {
      font-size: 12px;
      display: block;
      color: red;
    }
    .generate {
      height: 45px;
      line-height: 45px;
      font-size: 15px;
      border-radius: 5px;
      width: 88%;
      display: inline-block;
      background-color: #d33838;
      color: #fff;
    }
    .info {
      background: #f9f8f8;
      color: #333;
      height: 25px;
      line-height: 25px;
      font-size: 12px;
      display: block;
    }
  }
}
</style>
