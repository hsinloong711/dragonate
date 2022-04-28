<template>
  <div class="background">
    <h2>Sale</h2>
    <form @submit.prevent="handleSubmit">
      <h3>Product</h3>
      <div class="form-container">
        <label class="required">Name</label>
        <input
          type="text"
          class="input"
          autocomplete="off"
          v-model="name"
          required
        />
      </div>

      <div class="form-container">
        <label class="required">Stock</label>
        <input
          type="number"
          class="input"
          autocomplete="off"
          v-model="stock"
          required
        />
      </div>

      <div class="form-container">
        <label class="required">Description</label>
        <input
          type="text"
          class="input"
          autocomplete="off"
          v-model="description"
          required
        />
      </div>

      <div class="form-container">
        <label class="required">Price ( RM )</label>
        <input
          type="number"
          step="any"
          inputmode="”numeric"
          class="input"
          autocomplete="off"
          v-model="price"
          required
        />
      </div>

      <div class="form-container">
        <label class="required">Upload Image</label>
        <input type="file" class="input" autocomplete="off" required />
      </div>

      <div class="form-container">
        <button class="login-button">Create</button>
      </div>
    </form>
    <div v-if="error">
      <p class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";

const name = ref("");
const stock = ref("");
const description = ref("");
const price = ref("");
// const currentDate = new Date();
// const timestamp = currentDate.getTime()
const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date + "" + time;

const router = useRouter();

const { user, uid } = getUser();

const handleSubmit = async () => {
  const product = {
    name: name.value,
    stock: stock.value,
    description: description.value,
    price: price.value,
    uid: uid.value,
    user: user.value,
    timestamp: dateTime,
  };

  await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  router.push({ name: "shop" });
};
</script>

<style scoped>
.background {
  margin: auto;
  width: 50%;
}

form {
  border: 1px solid #818182;
  -webkit-box-shadow: 0px 0px 5px 0px #fff;
  -moz-box-shadow: 0px 0px 5px 0px #fff;
  box-shadow: 0px 0px 5px 0px #fff;
  padding: 40px;
  margin: 0px 100px 50px 100px;
  border-radius: 4px;
}

.form-container {
  margin-top: 5px;
  margin-bottom: 5px;
}

.required {
  color: white;
}

.required:after {
  content: " *";
  color: red;
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
  padding-left: 10px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 4px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.input:focus {
  outline: 1px solid white;
}

.select {
  text-align: left;
  font-family: "D-DIN", Arial;
  border: 1px solid #818182;
  background-color: #262626;
  color: white;
  transition: 0.4s;
  outline: none;
  padding: 15px;
  padding-left: 6.1px;
  width: 100%;
  margin-bottom: 15px;
}

.select:focus {
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

.additional {
  color: white;
  width: 100%;
  color: #818182;
  margin-bottom: 10px;
}
</style>
