import { getAuth } from "firebase/auth";
import { ref } from "vue";

const getUser = (id) => {
  const seller = ref("");
  const uid = ref("");
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // The user object has basic properties such as display name, email, etc.
    seller.value = user.email.split("@")[0];
    uid.value = user.uid;
  }
  return { seller, uid };
};

export default getUser;
