<template>
  <div class="background">
    <h2>Product List</h2>
    <div class="border">
      <div v-if="products.length">
        <ProductList :products="products" />
      </div>
      <div v-else>
        <Spinner />
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import getProducts from "../composables/getProducts";
import Spinner from "../components/Spinner.vue";

export default {
  name: "Shop",
  components: { ProductList, Spinner },
  setup() {
    // Destructure them to get the ending value of this function
    // Use load function to invoke the load method
    const { products, error, load } = getProducts();

    load();
    return { products, error };
  },
};
</script>

<style scoped>
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
  margin-top: 10px;
  width: 20%;
  padding: 10px;
  color: #f44336;
  font-family: "D-DIN", Arial;
  font-size: 14px;
  font-weight: 700;
  /* border: 1px solid #f44336; */
  /* border-radius: 10px; */
  /* -webkit-box-shadow: 0px 0px 5px 0px #f44336;
  -moz-box-shadow: 0px 0px 5px 0px #f44336;
  box-shadow: 0px 0px 5px 0px #f44336; */
}
</style>
