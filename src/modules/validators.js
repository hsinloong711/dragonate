export default function useValidators() {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? fieldName + " is required." : "";
  };

  const isEmail = (fieldName, fieldValue) => {
    return !fieldValue ? fieldName + " address is required." : "";
  };

  const isEmail1 = (fieldName, fieldValue) => {
    let re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !re.test(fieldValue) ? "Invalid " + "email" + " address." : "";
  };

  const isMinLength = (fieldName, fieldValue, min) => {
    return fieldValue.length < min
      ? fieldName + ` must be at least ${min} characters long.`
      : "";
  };
  return { isEmpty, isEmail, isEmail1, isMinLength };
}
