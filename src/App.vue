<template>
  <div id="app">
    <show-img></show-img>
    <form-input></form-input>
    <CutImg></CutImg>
  </div>
</template>

<script>
import ShowImg from "./components/ShowImg.vue";
import FormInput from "./components/FormInput.vue";
import CutImg from "./components/CutImg.vue";

export default {
  name: "app",
  components: {
    ShowImg,
    FormInput,
    CutImg
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
  position: relative;
}
</style>
