<template>
  <div class="background">
    <h2>Upload Image</h2>
    <form @submit.prevent="handleSubmit">
      <h3>Photo</h3>
      <div class="form-container">
        <label class="required">Title</label>
        <input
          type="text"
          class="input"
          autocomplete="off"
          v-model="title"
          textarea
          maxlength="65"
          required
        />
      </div>

      <div class="form-container">
        <div class="flexbox">
          <label class="required">Description</label>
          <span class="description">{{ description.length }} / 100</span>
        </div>
        <input
          type="text"
          class="input"
          autocomplete="off"
          v-model="description"
          textarea
          maxlength="100"
          required
        />
      </div>

      <div class="form-container">
        <label class="required">Location</label>
        <input
          type="text"
          step="any"
          class="input"
          autocomplete="off"
          v-model="location"
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

    const { name, uid } = getUser();
    const title = ref("");
    const description = ref("");
    const location = ref("");
    const today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    const dateTime = date + " " + time;

    const handleSubmit = async () => {
      const colRef = collection(db, "photos");

      await addDoc(colRef, {
        title: title.value,
        description: description.value,
        location: location.value,
        name: name.value,
        uid: uid.value,
        dateTime: dateTime,
      });
      console.log(name.value);
      router.push({ name: "photo" });
    };

    return {
      handleSubmit,
      title,
      description,
      location,
      name,
      uid,
      dateTime,
    };
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

.flexbox {
  display: flex;
  justify-content: space-between;
}

.description {
  color: #b8b8b8;
  font-size: 13px;
}
</style>
