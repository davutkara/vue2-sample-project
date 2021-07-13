import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layouts/default.vue";
import Home from "@/views/Home";
import Contact from "@/views/Contact";
import Login from "@/views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: DefaultLayout,
    children: [
      {
        name: "home",
        path: "home",
        component: Home,
      },
      {
        name: "contactUs",
        path: "contact",
        component: Contact,
      },
      {
        name: "login",
        path: "login",
        component: Login,
      },
    ],
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
