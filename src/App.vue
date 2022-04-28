<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  props: ["products"],

  components: { Navbar },
};
</script>

<template>
  <div class="wrapper">
    <nav>
      <Navbar />
      <!-- <RouterLink to="/">Home</RouterLink> -->
      <!-- <RouterLink to="homeredirect"></RouterLink> -->
    </nav>
    <!-- Child component passed props by parent Create.vue -->
    <div class="product-list">
      <div v-for="product in products" :key="product.id">
        <p>{{ product.description }}</p>
      </div>
    </div>
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>
  </div>

  <!-- <Footerbar /> for both home and about -->

  <!-- <RouterView /> -->
  <!-- Outside the routerview will appear in every single page, can put header footer here -->
</template>

<style>
@import "@/assets/base.css";
@import url("http://fonts.cdnfonts.com/css/d-din");
@import url("https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap");

#app {
  position: relative;
  min-height: 100vh;
  background: black;
  color: white;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "D-Din", Arial;
  font-weight: 400;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
