import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import language from "./language";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
    language
  }
});
