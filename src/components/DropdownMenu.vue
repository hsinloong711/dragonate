<template>
  <button @click="handleSignOut" class="sign-in1">{{ name }} ▼</button>
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

<style>
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
