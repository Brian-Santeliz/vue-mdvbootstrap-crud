import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "view",
    component: () => import("../View/List.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../View/Add.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../View/Edit.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
