<template>
  <b-container class="mt-5 pb-5">
    <b-jumbotron :header="$t('contactUs')">
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
          :label="$t('phone')"
          label-for="input-phone"
        >
          <b-form-input
            id="input-phone"
            v-model="form.phone"
            type="tel"
            :placeholder="$t('phonePlaceholder')"
            required
            :state="phoneValidation"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          :label="$t('country')"
          label-for="input-country"
          :description="$t('countryDescription')"
        >
          <v-select
            class="bg-white"
            id="input-country"
            v-model="form.country"
            :options="countryList"
            label="name"
            :reduce="(country) => country.id"
            required
          >
            <template #search="{attributes, events}">
              <input
                class="vs__search"
                :required="!form.country"
                v-bind="attributes"
                v-on="events"
              />
            </template>
          </v-select>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          :label="$t('text')"
          label-for="input-text"
        >
          <b-form-textarea
            id="input-text"
            v-model="form.text"
            :placeholder="$t('textPlaceholder')"
            required
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary" block>{{
          $t("submit")
        }}</b-button>
      </b-form>
    </b-jumbotron>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        country: "",
        text: "",
      },
    };
  },
  computed: {
    ...mapState("session", ["name", "email"]),
    phoneValidation() {
      // https://stackoverflow.com/a/16699507
      const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

      return this.form.phone.match(phoneRegex) !== null;
    },
    countryList: {
      get() {
        return ["TR", "US", "GB", "DE", "SE", "KE", "BR", "ZW"].map((id) => ({
          id,
          name: this.$t(id),
        }));
      },
    },
  },
  watch: {
    name: {
      immediate: true,
      handler(value) {
        // empty string
        value = !value ? "" : value;
        this.form.name = value;
      },
    },
    email: {
      immediate: true,
      handler(value) {
        // empty string
        value = !value ? "" : value;
        this.form.email = value;
      },
    },
  },
  methods: {
    onSubmit() {
      console.log({
        name: this.form.name,
        email: this.form.email,
        phoneNumber: this.form.phone,
        country_code: this.form.country,
        text: this.form.text,
      });
    },
  },
};
</script>

<style></style>
