<template>
  <header>
    <a href="/" id="logo">Dragonate</a>
    <nav>
      <router-link class="router" :to="{ name: 'home' }">Home</router-link>
      <router-link class="router" :to="{ name: 'about' }">About</router-link>
      <router-link class="shop" :to="{ name: 'shop' }">🛒</router-link>
      <router-link v-if="!isLoggedIn" class="sign-in" :to="{ name: 'signin' }"
        >Sign In</router-link
      >
      <div class="flex" v-else>
        <router-link class="router" :to="{ name: 'home' }"
          >Order History</router-link
        >
        <!-- <div class="dropdown-menu">
          <button @click="showMenu">{{ name }}</button>
          <div class="dropdown-content">
            <button @click="handleSignOut" class="sign-out">Sign Out</button>
          </div>
        </div> -->
        <button @click="handleSignOut" class="sign-out">Logout</button>
        <a href="#" class="user-name">{{ name }} &nbsp; &nbsp;</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(true);
const name = ref("");

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      name.value = user.email.split("@")[0];
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    alert("Sign out");
    router.push("/shop");
  });
};
</script>

<style scoped>
.flex {
  display: inline;
}

.user-name {
  float: right;
}

.sign-out {
  font-weight: 700;
  float: right;
  outline: none;
  border: none;
  background: none;
  background-color: black;
  color: white;
  margin-top: 6px;
  cursor: pointer;
}

.sign-out:hover {
  color: #f44336;
}

template {
  overflow: hidden;
}

header {
  display: flex;
  padding-top: 20px;
  width: 100%;
  /* border-bottom: 1px solid #1d1d1d; */
  transition: 0.5 ease all;
}

nav {
  width: 100%;
  margin-left: 50px;
}

#logo {
  font-size: 45px;
  color: white;
  font-family: "Syne Mono", monospace;
  margin-left: 50px;
  padding-bottom: 12px;
}

nav a {
  font: 14px/28px "D-Din", Arial, Verdana, sans-serif;
  font-weight: 700;
  font-style: normal;
  position: relative;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding-bottom: 5px;
  margin-left: 30px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
/* @media (hover: hover) {
  a:hover {
    background-color: #2c3e50;
  }
} */

/* nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: black;
}  */

/* .fancy-link:active {
  color: white;
}

.fancy-link-active:hover {
  background-color: black;
}  */

.router {
  position: relative;
  color: white;
}
.router::after {
  color: hsla(160, 100%, 37%, 1);
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease-in;
}

.router:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.sign-in {
  font-weight: 700;
  font-style: normal;
  color: white;
  float: right;
  padding: 0;
}

.sign-in::after {
  color: hsla(160, 100%, 37%, 1);
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease-in;
}

.sign-in:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.shop {
  font: 20px "D-Din", Arial;
  font-weight: 500;
  font-style: normal;
  position: relative;
  float: right;
  border-style: inset;
  border: 2px inset hsla(160, 100%, 37%, 1);
  padding: 0 1rem;
  margin-left: 20px;
  margin-right: 20px;
  transition: all 0.3s;
}

.shop:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

/* nav a:first-of-type {
  border: 0;
} */
.sign-in1 {
  font-weight: 700;
  font-style: normal;
  color: white;
  float: right;
  padding: 0;
  outline: none;
  background: none;
  border: none;
  padding: 0;
  background: none;
  color: #b8b8b8;
  font-weight: 700;
}
</style>
