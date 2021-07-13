import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import vSelect from "vue-select";
import { router } from "@/router/index.js";
import { i18n } from "@/i18n/index.js";
import { store } from "@/store/index.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-select/src/scss/vue-select.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store,
}).$mount("#app");
