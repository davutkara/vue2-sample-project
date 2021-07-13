<template>
  <b-container class="mt-3">
    <b-card v-if="isSessionActive" :header="$t('logout')">
      <b-alert show
        >{{ $t("hi") }}! {{ name }} . {{ $t("sessionMessage") }}
      </b-alert>

      <b-button @click="logout" block variant="danger">{{
        $t("logout")
      }}</b-button>
    </b-card>
    <b-card v-else :header="$t('login')">
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-3"
          :label="$t('nameLabel')"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="form.name"
            type="text"
            :placeholder="$t('mamePlaceholder')"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          :label="$t('emailLabel')"
          label-for="input-email"
          :description="$t('emailDescription')"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            :placeholder="$t('emailPlaceholder')"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          :label="$t('password')"
          label-for="input-password"
        >
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            :placeholder="$t('passwordPlaceholder')"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" block>{{
          $t("submit")
        }}</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState("session", ["name"]),
    ...mapGetters("session", ["isSessionActive"]),
  },
  methods: {
    ...mapActions("session", ["login", "logout"]),
    onSubmit() {
      this.login({
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      })
        .then(() => {
          this.$emit("loginSuccess", true);
        })
        .finally(this.resetForm);
    },
    resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
    },
  },
  i18n: {
    // `i18n` option, setup locale info for component
    messages: {
      en: {
        hi: "Hi",
        sessionMessage: "Your session is active",
        login: "Login",
        emailLabel: "Email address:",
        emailDescription: "We'll never share your email with anyone else.",
        emailPlaceholder: "Enter Email",
        password: "Password",
        passwordPlaceholder: "Enter Passowrd",
        submit: "Submit",
        nameLabel: "Your Name",
        mamePlaceholder: "Enter Name",
      },
      tr: {
        hi: "Selam",
        sessionMessage: "Oturumunuz aktif.",
        login: "Giris Yap",
        emailLabel: "E-posta adresiniz:",
        emailDescription: "E-posta adresinizi kimseyle paylasmiyoruz.",
        emailPlaceholder: "E-posta giriniz",
        password: "Sifre",
        passwordPlaceholder: "Sifre giriniz.",
        submit: "Gonder",
        nameLabel: "Adiniz",
        mamePlaceholder: "Adinizi giriniz",
      },
    },
  },
};
</script>
