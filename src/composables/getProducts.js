// Async function, with try-catch block. Try to do something and catch error if fail
// Use the async await function. Perform and complete the fetch first to resolve promise then only proceed.
// Use the fetch API, with Json method to pass the data. Make sure the data is OK received if not throw error.
// Update the products by passing Json data into Javascript.

import { ref } from "vue";

const getProducts = () => {
  const products = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/products/");
      console.log(data);
      if (!data.ok) {
        throw Error("That product doesn't exist.");
      }
      products.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  // Don't invoke the load function here. Use it(Destructure) at vue files that use this logic instead.
  //   load();
  return { products, error, load };
};

export default getProducts;
