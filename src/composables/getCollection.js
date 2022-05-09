import { ref } from "vue";

// Import db object and two functions from firestore
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const getCollection = (c) => {
  const documents = ref(null);

  // Collection reference
  const colRef = collection(db, c); // Use the collection method, first argu is connecting to db database, second is pass in what we want to listen to(could be products)

  onSnapshot(colRef, (snapshot) => {
    let results = [];

    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    documents.value = results;
  });
  return { documents };
};
export default getCollection;
