import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/dashboardView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/projectsView.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () => import("../views/teamView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
