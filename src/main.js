import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "firebase/firestore";
// Vue.config.productionTip = false;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuAhWd8TsI_AaivqKvw0uWJ7eE4NU3QG8",
  authDomain: "dragonate-bc9a8.firebaseapp.com",
  projectId: "dragonate-bc9a8",
  storageBucket: "dragonate-bc9a8.appspot.com",
  messagingSenderId: "899286179762",
  appId: "1:899286179762:web:4ffb04fdffd9b4b9e1ceab",
  measurementId: "G-WXSS5FYSJJ",
};

// Initialise firebase
initializeApp(firebaseConfig);
// Initialise firestore service
// const projectFirestore = firebase.firestore();

// export { projectFirestore };

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
