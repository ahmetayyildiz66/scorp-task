import Vue from "vue";
import VueI18n from "vue-i18n";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import { ValidationProvider, extend } from "vee-validate";
import { regex } from "vee-validate/dist/rules";
import router from "./router";
import store from "./store";

extend("regex", regex);
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(Vuelidate);

import { languages, defaultLocale } from "./i18n/index";
const messages = Object.assign(languages);

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: "tr",
  messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
