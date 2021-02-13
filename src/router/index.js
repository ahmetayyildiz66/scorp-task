import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/contact",
    name: "Contacts",
    component: () => import("../views/ContactPage.vue")
  },
  {
    path: "/",
    name: "Homepage",
    component: () => import("../views/Homepage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
