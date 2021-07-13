<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <img
          src="/assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top mr-2"
          alt="Kitten"
        />
        {{ activePage.title }}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/home">{{ $t("home") }}</b-nav-item>
            <b-nav-item to="/contact">{{ $t("contactUs") }}</b-nav-item>
          </b-navbar-nav>

          <lang-dropdown />

          <b-nav-item-dropdown v-if="isSessionActive" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User: {{ name }}</em>
            </template>
            <b-dropdown-item to="/login">{{ name }}</b-dropdown-item>
            <b-dropdown-item @click="logout">{{
              $t("logout")
            }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form v-else>
            <b-button size="sm" v-b-modal.login-modal>{{
              $t("login")
            }}</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- The login modal -->
    <b-modal
      id="login-modal"
      ref="login-modal"
      hide-footer
      :title="$t('login')"
    >
      <template #modal-title>
        <lang-dropdown parentComponentName="b-dropdown" />
      </template>
      <Login @loginSuccess="() => $refs['login-modal'].hide()" />
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Login from "@/views/Login";
import LangDropdown from "@/components/lang-dropdown.vue";
export default {
  data() {
    return {
      title: "Dummy",
    };
  },
  components: { Login, LangDropdown },
  computed: {
    ...mapState("session", ["name"]),
    ...mapGetters("session", ["isSessionActive"]),
    activePage() {
      const isHome = this.$route.path === "/home";
      return {
        title: isHome ? this.title : this.$t(this.$route.name),
        path: this.$route.path,
      };
    },
  },
  methods: {
    ...mapActions("session", ["logout"]),
  },
};
</script>

<style></style>
