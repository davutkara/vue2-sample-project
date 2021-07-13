import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./en.json";
import tr from "./tr.json";

Vue.use(VueI18n);

export const DEFAULT_LANGUAGE = "en";

export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE,
  messages: {
    en,
    tr,
  },
});
