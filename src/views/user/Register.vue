<template>
  <div class="background">
    <h2>First step to connect</h2>
    <form @submit.prevent="register">
      <h3>Registration</h3>
      <div class="form-container">
        <input
          type="text"
          class="input"
          placeholder="Email (e.g. dragonate@outlook.com)"
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
        <button class="login-button">Register</button>
      </div>
      <div class="button-container">
        <p class="register">
          ◀ Go back to
          <button
            @click="
              $router.push({
                name: 'signin',
              })
            "
            class="register-button"
            type="submit"
          >
            Login Page</button
          >.
        </p>
      </div>
    </form>
    <div v-if="errorMsg">
      <p class="error">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");
    const router = useRouter();

    const register = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          console.log("User successfully registered.");
          alert("User successfuly registered");
          router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/email-already-in-use":
              errorMsg.value = "Account already exists.";
              break;
            case "auth/invalid-email":
              errorMsg.value = "Invalid e-mail address or password.";
              break;
            case "auth/weak-password":
              errorMsg.value = "The password must have at least 6 characters.";
              break;
            default:
              errorMsg.value = "Input cannot be empty.";
              break;
          }
        });
    };

    return {
      email,
      password,
      errorMsg,
      register,
    };
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
  border: 1px solid #818182;
  background-color: #262626;
  color: white;
  transition: 0.4s;
  outline: none;
  padding: 15px;
  padding-left: 20px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 4px;
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
  cursor: pointer;
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
  cursor: pointer;
}
</style>
