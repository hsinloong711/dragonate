<template>
  <div class="form-container">
    <input
      type="text"
      class="input"
      placeholder="Name"
      autocomplete="off"
      v-model="input"
      @keyup="validateInput"
      @blur="validateInput"
    />
    <div class="error" v-if="error.Name">
      {{ error.Name }}
    </div>
    <div v-else>&nbsp;</div>
  </div>
</template>

<script>
import { ref } from "vue";
import useFormValidation from "@/modules/useFormValidation";

export default {
  setup() {
    let input = ref("");
    const { validateNameField, error } = useFormValidation();
    const validateInput = () => {
      // error.value = input.value === "" ? "Address is required" : ""; replaced by below
      validateNameField("Name", input.value);
    };
    return { input, error, validateInput };
  },
};
</script>

<style scoped>
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
  width: 581.5px;
  border-radius: 4px;
}

.input:focus {
  outline: 1px solid white;
}

.error {
  display: block;
  color: #f44336;
  font-family: "D-DIN", Arial;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
}
</style>
