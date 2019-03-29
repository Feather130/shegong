<template>
  <div class="showImg">
    <div class="img"></div>
    <div class="emblem">
      <img src="../assets/logo.png">
    </div>
    <div class="upload">
      <span>上传照片</span>
      <input
        type="file"
        id="file-input"
        name="image"
        ref="checkedImg"
        accept="image/*"
        @change="hasImg"
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    hasImg() {
      const file = this.$refs.checkedImg.files[0];
      if (file !== undefined) {
        this.$store.commit("imgCut", {
          files: file,
          cutShow: true
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.showImg {
  height: 50%;
  position: relative;
  margin-bottom: 27.5px;
  .img {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
    border-bottom: 1px dashed #ececec;
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
      background: #fafafa;
    }
    &::after {
      width: 60px;
      height: 6px;
    }
    &::before {
      width: 6px;
      height: 60px;
    }
  }
  .emblem {
    position: absolute;
    top: 25px;
    left: 25px;
    img {
      width: 60px;
    }
  }
  .upload {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -27.5px;
    margin: 0 auto;
    width: 110px;
    height: 36px;
    border-radius: 100px;
    background: #d33838;
    text-align: center;
    line-height: 36px;
    span {
      color: #fff;
    }
    input {
      opacity: 0;
      width: 110px;
      height: 36px;
      border-radius: 100px;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}
</style>
