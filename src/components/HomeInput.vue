<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="address"
      type="text"
      id="address"
      placeholder="Please enter your address"
      required
    />
    <button
      @click="
        $router.push({
          name: 'homeredirect',
          params: {
            address,
          },
        })
      "
      class="order-button"
      type="submit"
      :disabled="address === ''"
    >
      {{ textButton }}
    </button>
    <p class="privacy">
      {{ text }}
      <button class="terms-button">{{ textOne }}</button>.
    </p>
  </form>
</template>

<script>
import HomeRedirect from "../views/home/HomeRedirect.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { HomeRedirect },

  setup() {
    const address = ref("");
    let textButton = "Order Now";
    let text = "By pressing ''Order Now'', you agree to our";
    let textOne = "Terms and Conditions";

    return { address, textButton, text, textOne };
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  overflow: hidden;
}
form {
  display: block;
  text-align: center;
  font: 16px/30px "D-DIN", Arial;
  margin-top: 120px;
  padding-left: 12px;
  /* position: fixed; */
}

#address {
  justify-content: center;
  /* font: 14px "D-DIN", Arial; */
  font-family: "D-DIN", Arial;
  font-weight: 700;
  background-color: #51596c;
  border: 1px solid white;
  transition: 0.4s;
  outline: none;
  padding: 15px;
  padding-left: 20px;
  color: white;
  border-radius: 4px;
  width: 350px;
  margin-right: 18px;
}

input::placeholder {
  color: #b8b8b8;
}

.order-button {
  font-family: "D-DIN", Arial;
  font-weight: 700;
  border: 1px solid black;
  transition: 0.4s;
  color: hsla(160, 100%, 37%, 1);
  border-radius: 4px;
  padding: 15px;
  padding-left: 40px;
  padding-right: 40px;
  transition: ease-out 0.3s;
  z-index: 1;
}

.order-button:disabled {
  color: black;
  background-color: #fff;
}

.order-button:hover {
  cursor: pointer;
  /* background-color: #fff; */
}

/* Disable autofill highlighting */
input:-webkit-autofill {
  -webkit-text-fill-color: var(--text-input-color) !important;
  background-clip: text !important;
  background-color: #51596c;
  color: #51596c;
}

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  box-shadow: 0 0 0 1000px #51596c inset !important;
  -webkit-box-shadow: 0 0 0 1000px #51596c inset !important;
  -webkit-text-fill-color: white !important;
}

.privacy {
  font-family: "D-DIN", Arial;
  font-size: 14px;
  color: #b8b8b8;
  padding: 1px;
  position: relative;
}

.terms-button {
  border: none;
  padding: 0;
  background: none;
  color: #b8b8b8;
  font-weight: 700;
}

.terms-button:hover {
  transition: 0.5s all ease;
  color: white;
}
</style>
