<template>
  <div class="background">
    <h2>First step to connect</h2>
    <form @submit.prevent class="border">
      <h3>Registration</h3>
      <div class="form-container">
        <input
          type="text"
          class="input"
          placeholder="Email (e.g. dragonate@outlook.com)"
          autocomplete="off"
          v-model="email"
          @keyup="validateEmail"
          @blur="validateEmail"
        />
      </div>
      <div v-if="error.Email" class="error">
        {{ error.Email }}
      </div>
      <div v-else>&nbsp;</div>

      <div class="form-container">
        <input
          type="password"
          class="input"
          placeholder="Password"
          autocomplete="off"
          v-model="password"
          @keyup="validatePassword"
          @blur="validatePassword"
        />
      </div>
      <div v-if="error.Password" class="error">{{ error.Password }}</div>
      <div v-else>&nbsp;</div>

      <div class="form-container">
        <button @click="register" class="login-button">Register</button>
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
      <!-- <Recaptcha /> -->
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useFormValidation from "@/modules/useFormValidation";
import { useRouter } from "vue-router";
// import Recaptcha from "@/components/Recaptcha.vue";
export default {
  // components: { Recaptcha },
  setup() {
    const email = ref("");
    const password = ref("");
    const errMsg = ref("");
    const router = useRouter();
    const { validateEmailField, validatePasswordField, error } =
      useFormValidation();
    const validateEmail = () => {
      validateEmailField("Email", email.value);
    };

    const validatePassword = () => {
      validatePasswordField("Password", password.value);
    };

    const register = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          console.log("User successfully registered.");
          alert("DONE");
          router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/email-already-in-use":
              // errMsg.value = "Account already exists.";
              alert("Account already exists");
            default:
              // alert("Input cannot be empty.");
              // errMsg.value = "";
              break;
          }
        });
    };
    return {
      email,
      password,
      validateEmail,
      validatePassword,
      error,
      errMsg,
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
  border: 1px solid #b8b8b8;
  padding: 40px;
  margin: 0px 100px 100px 100px;
}

.border {
  color: red;
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
  display: block;
  color: #f44336;
  font-family: "D-DIN", Arial;
  font-size: 12px;
  padding-bottom: 4.9px;
  padding-left: 20px;
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
</style>
