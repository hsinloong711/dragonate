<template>
  <div class="background">
    <h2>Your portal to fast-speed</h2>
    <form @submit.prevent>
      <h3>Log-in</h3>
      <div class="form-container">
        <input
          type="text"
          class="input"
          placeholder="Email"
          autocomplete="off"
          v-model="email"
        />
      </div>

      <div class="form-container">
        <input
          type="password"
          class="input"
          placeholder="Password"
          autocomplete="off"
          v-model="password"
        />
      </div>

      <div class="form-container">
        <button @click="register" class="login-button">Log-in</button>
      </div>

      <div class="button-container">
        <p class="register">
          Don't have an account?
          <button
            @click="
              $router.push({
                name: 'register',
              })
            "
            class="register-button"
            type="submit"
          >
            Register here</button
          >.
        </p>
      </div>

      <div class="additional">
        <p>________________________________________________</p>
      </div>
      <button @click="signInWithGoogle" class="google-button">
        Sign in with Google 🌎
      </button>
    </form>

    <div v-if="errorMsg" class="error">{{ errorMsg }}</div>
    <div v-else>&nbsp;</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");
    const router = useRouter();

    // First import Firebase Authentication API to sign in our existing users.

    // signInWithEmailAndPassword function is accessible by getAuth method which takes in existing user email.value and password.value
    // and returns a promise. Use .then to cache successful response and .catch to catch error

    // Also display error message captured by Firebase error.code cases to inform our users
    const register = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          console.log("User successfully signed in.");
          alert("Signed in");

          router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/user-not-found":
              errorMsg.value = "No account with that email was found.";
              break;
            case "auth/invalid-email":
              errorMsg.value = "Email or password is incorrect.";
              break;
            case "auth/wrong-password":
              errorMsg.value = "Incorrect password.";
              break;
            default:
              errorMsg.value = "Email or password is incorrect.";
              break;
          }
        });
    };

    // First import GoogleAuthProvider / signInWithPopup above to use GoogleAccount Oauth
    // Create a provider using GoogleAuthProvider then call signInWithPopup using Auth and Provider which shows the popup to sign in
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then(() => {
          console.log();
          router.push("/");
        })
        .catch((error) => {
          //handle error
        });
    };

    return { email, password, errorMsg, register, signInWithGoogle };
  },
};
</script>

<style scoped>
.background {
  margin: auto;
  width: 35%;
}

form {
  border: 1px solid #818182;
  -webkit-box-shadow: 0px 0px 5px 0px #fff;
  -moz-box-shadow: 0px 0px 5px 0px #fff;
  box-shadow: 0px 0px 5px 0px #fff;
  padding: 40px;
  margin: 0px 100px 50px 100px;
  border-radius: 2px;
}

.form-container {
  margin-top: 5px;
  margin-bottom: 5px;
}

.input {
  text-align: left;
  font-family: "D-DIN", Arial;
  /* font: 14px "D-DIN", Arial; */
  border: 1px solid #818182;
  background-color: #262626;
  color: white;
  transition: 0.4s;
  outline: none;
  padding: 15px;
  padding-left: 20px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 15px;
}

.input:focus {
  outline: 1px solid white;
}

h3 {
  text-align: left;
  background: -webkit-linear-gradient(white, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: "D-DIN", Arial;
  padding-bottom: 20px;
}

h2 {
  color: white;
  background: -webkit-linear-gradient(white, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 30px/100px "D-DIN", Arial;
  text-align: center;
  font-weight: 700;
}
.error {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 50%;
  padding: 10px;
  color: #f44336;
  font-family: "D-DIN", Arial;
  font-size: 14px;
  font-weight: 700;
  /* border: 1px solid #f44336; */
  /* border-radius: 10px; */
  -webkit-box-shadow: 0px 0px 5px 0px #f44336;
  -moz-box-shadow: 0px 0px 5px 0px #f44336;
  box-shadow: 0px 0px 5px 0px #f44336;
}
.login-button {
  text-align: center;
  /* font: 14px "D-DIN", Arial; */
  font-weight: 700;
  border: 1px solid #818182;
  color: black;
  background-color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  outline: none;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  border-radius: 4px;
}

.button-container {
  display: flex;
}

.register {
  font-size: 14px;
  color: #b8b8b8;
  position: relative;
}

.register-button {
  border: none;
  padding: 0;
  background-color: black;
  color: #b8b8b8;
  font-weight: 700;
}

.register-button:hover {
  transition: 0.5s all ease;
  color: white;
}

.additional {
  color: white;
  width: 100%;
  color: #818182;
  margin-bottom: 10px;
}

.google-button {
  background-color: white;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #818182;
  width: 100%;
  font-weight: 700;
  border-radius: 4px;
}
</style>
