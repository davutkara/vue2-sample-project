<template>
  <component :is="parentComponentName" :text="$t('lang')" right>
    <b-dropdown-item @click="setLanguage('tr')">Turkce</b-dropdown-item>
    <b-dropdown-item @click="setLanguage('en')">English</b-dropdown-item>
  </component>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    parentComponentName: {
      type: String,
      require: true,
      default: "b-nav-item-dropdown",
    },
  },
  methods: {
    ...mapActions(["setLanguage"]),
  },
};
</script>
