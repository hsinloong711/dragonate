// Async function, with try-catch block. Try to do something and catch error if fail
// Use the async await function. Perform and complete the fetch first to resolve promise then only proceed.
// Use the fetch API, with Json method to pass the data. Make sure the data is OK received if not throw error.
// Update the products by passing Json data into Javascript.

import { ref } from "vue";

//  Load first, then either try to get products or catch error

const getProduct = (id) => {
  const product = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // We wait for this new promise that resolves at some point or gets rejected
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 1000);
      // });
      let data = await fetch("http://localhost:3000/products/" + id);
      console.log(data);
      if (!data.ok) {
        throw Error("That product doesn't exist.");
      }
      product.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  // Don't invoke the load function here. Use it(Destructure) at vue files that use this logic instead.
  //   load();
  return { product, error, load };
};

export default getProduct;
