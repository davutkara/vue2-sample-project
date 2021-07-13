<template>
  <b-container class="mt-5 pb-5">
    <b-jumbotron
      :header="$t('header')"
      :lead="$t('lead')"
    >
      <p v-text="$t('message')" />
      <b-button variant="primary" href="#" v-text="$t('more')" />
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  i18n: {
    // `i18n` option, setup locale info for component
    messages: {
      en: {
        header: "Sample Project",
        lead: "Bootstrap v4 Components for Vue.js 2",
        message: "For more information visit website",
        more: "More Info",
      },
      tr: {
        header: "Ornek Proje",
        lead: "Vue.js 2 icin Bootstrap v4 bilesenleri",
        message: "Detayli bilgi icin websitemizi ziyaret edin",
        more: "Detayli Bilgi",
      },
    },
  },
};
</script>

<style></style>
