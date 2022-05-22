import { createRouter, createWebHistory } from "vue-router";
import { useRouter } from "vue-router";
import Home from "../views/home/Home.vue";
import HomeRedirect from "../views/home/HomeRedirect.vue";
import About from "../views/About.vue";
import SignIn from "../views/user/SignIn.vue";
import Register from "../views/user/Register.vue";
import Cart from "../views/Cart.vue";
import Photo from "../views/Photo.vue";
import Details from "../views/Details.vue";
import User from "../views/user/User.vue";
import Create from "../views/Create.vue";

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
    // {
    //   path: "/order",
    //   name: "order",
    //   component: OrderHistory,
    //   // Metadata hook, create meta and inside set requiresAuth to true, meaning only logged in users can access.
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
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
      path: "/photo",
      name: "photo",
      component: Photo,
    },
    {
      path: "/products/:id",
      name: "details",
      component: Details,
    },
    {
      path: "/user",
      name: "user",
      component: User,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

// Navigation guard, beforeEach hook which runs before vuerouter processes its routes

export default router;
