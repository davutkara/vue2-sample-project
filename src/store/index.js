
import session from "./session";
import Vue from "vue";
import Vuex from "vuex";
import { i18n } from "@/i18n/index.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  getters: {
    locale() {
      return i18n.locale;
    },
  },
  actions: {
    setLanguage(state, value) {
      i18n.locale = value;
    },
  },
  modules: {
    session,
  },
});
