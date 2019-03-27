<template>
  <div id="app">
    <show-img></show-img>
  </div>
</template>

<script>
import ShowImg from "./components/ShowImg.vue";

export default {
  name: "app",
  components: {
    ShowImg
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
#app{
  height: 100%;
}
</style>
