import { reactive } from "@vue/reactivity";
import useValidators from "@/modules/validators";

const error = reactive({});

export default function useFormValidation() {
  const { isEmpty, isEmail, isEmail1, isMinLength } = useValidators();
  const validateNameField = (fieldName, fieldValue) => {
    error[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : "";
  };

  const validateEmailField = (fieldName, fieldValue) => {
    error[fieldName] = !fieldValue
      ? isEmail(fieldName, fieldValue)
      : isEmail1(fieldName, fieldValue);
  };

  const validatePhoneField = (fieldName, fieldValue) => {
    error[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : "";
  };

  const validatePasswordField = (fieldName, fieldValue) => {
    error[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isMinLength(fieldName, fieldValue, 6);
  };
  return {
    error,
    validateNameField,
    validateEmailField,
    validatePhoneField,
    validatePasswordField,
  };
}
