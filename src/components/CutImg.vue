<template>
  <div class="cut" v-show="$store.state.cutShow">
    <span class="close">取消</span>
    <span class="ok">使用</span>
  </div>
</template>

<script>
import PhotoClip from "photoclip";
export default {
  mounted: function() {
    new PhotoClip(".cut", {
      adaptive: ["100%", "50%"],
      img: this.$store.state.files,
      outputQuality: 1,
      ok: ".ok",
      maxZoom: 0,
      lrzOption: {
        quality: 1
      },
      style: {
        maskColor: "rgba(0,0,0,1)"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.cut {
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  overflow: hidden;
  .close,
  .ok {
    position: fixed;
    bottom: 20px;
    border-radius: 100px;
    height: 40px;
    width: 80px;
    font-size: 13px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    z-index: 12;
  }
  .close {
    left: 20px;
    background: #eee;
    color: #666;
  }
  .ok {
    right: 20px;
    background: red;
    color: #fff;
  }
}
</style>
