import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";



Vue.use(VueRouter);

const routes = [
  {   
    path: '/',
    redirect: '/Login'   //重定向
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/Friend",
    name: "Friend",
    component: () =>
      import( "../views/Friend.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import("../views/Setting.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  
});

export default router;
