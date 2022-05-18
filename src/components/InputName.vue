<template>
  <form @submit.prevent></form>
</template>

<script>
import { ref } from "vue";
import useFormValidation from "@/modules/useFormValidation";
import getUser from "../composables/getUser";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "vue-router";

export default {
  props: {
    address: {
      type: String,
    },
  },
  setup() {
    const router = useRouter();
    const { owner, ownerUid } = getUser();

    let inputName = ref("");
    let inputEmail = ref("");
    let inputPhone = ref("");
    let freeTrial = ref(true);
    const { validateNameField, validateEmailField, validatePhoneField, error } =
      useFormValidation();

    const validateName = () => {
      // error.value = input.value === "" ? "Address is required" : ""; replaced by below
      validateNameField("Name", inputName.value);
    };

    const validateEmail = () => {
      validateEmailField("Email", inputEmail.value);
    };

    const validatePhone = () => {
      validatePhoneField("Phone", inputPhone.value);
    };

    const handleSubmit = async () => {
      const colRef = collection(db, "purchasedUsers");

      await addDoc(colRef, {
        inputName: inputName.value,
        inputEmail: inputEmail.value,
        inputPhone: inputPhone.value,
        freeTrial: !freeTrial.value,
        owner: owner.value,
        ownerUid: ownerUid.value,
      });

      console.log(inputName);
      router.push({ name: "about" });
    };

    return {
      inputName,
      inputEmail,
      inputPhone,
      freeTrial,
      error,
      owner,
      ownerUid,
      validateName,
      validateEmail,
      validatePhone,
      handleSubmit,
    };
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

#address {
  text-align: left;
  font: "D-DIN", Arial;
  font-family: "D-DIN", Arial;
  border: 1px solid white;
  transition: 0.4s;
  outline: none;
  padding: 15px;
  padding-left: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 581.5px;
  font: 15px "D-DIN", Arial;
  font-weight: 700;
}
</style>
