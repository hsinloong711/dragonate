import { getAuth } from "firebase/auth";
import { ref } from "vue";

const getUser = () => {
  const name = ref("Guest");
  const uid = ref("");
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // The user object has basic properties such as display name, email, etc.
    name.value = user.email.split("@")[0];
    uid.value = user.uid;
  }
  return { name, uid };
};

export default getUser;
