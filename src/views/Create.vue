<template>
  <div class="background">
    <h2>Sale</h2>
    <form @submit.prevent>
      <h3>Product</h3>
      <div class="form-container">
        <label class="required">Name</label>
        <input
          type="text"
          class="input"
          autocomplete="off"
          v-model="name"
          textarea
          maxlength="65"
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
        <span class="description">{{ description.length }} / 750</span>
        <label class="required">Description</label>
        <input
          type="text"
          class="input"
          autocomplete="off"
          v-model="description"
          textarea
          maxlength="750"
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
        <button @click="handleSubmit" class="login-button">Create</button>
      </div>
    </form>
    <div v-if="error">
      <p class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";

import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

export default {
  setup() {
    const router = useRouter();
    const { seller, uid } = getUser();

    const name = ref("");
    const description = ref("");
    const stock = ref("");
    const price = ref("");

    const handleSubmit = async () => {
      const colRef = collection(db, "products"); // This add third arguemnt , doc.id  getDoc(colRef)

      await addDoc(colRef, {
        name: name.value,
        description: description.value,
        stock: stock.value,
        price: price.value,
        seller: seller.value,
        uid: uid.value,
      });
      router.push({ name: "shop" });
    };

    return { handleSubmit, name, description, stock, price };
  },
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
