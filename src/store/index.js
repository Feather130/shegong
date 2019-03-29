import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    files: null,
    cutShow: false,
  },
  mutations:{
    imgCut(state,{files,cutShow}){
      state.files=files;
      state.cutShow=cutShow;
    }
  }
});
