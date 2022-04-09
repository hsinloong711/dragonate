import { createRouter, createWebHistory } from "vue-router";
import { useRouter } from "vue-router";
import Home from "../views/home/Home.vue";
import HomeRedirect from "../views/home/HomeRedirect.vue";
import About from "../views/About.vue";
import SignIn from "../views/user/SignIn.vue";
import Register from "../views/user/Register.vue";
import Shop from "../views/Shop.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      replace: true,
    },
    {
      path: "/homeredirect",
      name: "homeredirect",
      component: HomeRedirect,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
  ],
});

export default router;
