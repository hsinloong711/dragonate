<template>
  <!-- Child component passed props by parent Create.vue -->
  <div class="product-list">
    <div v-for="product in products" :key="product.id">
      <SingleProduct :product="product" />
    </div>
  </div>
</template>

<script>
import SingleProduct from "./SingleProduct.vue";
export default {
  props: ["products"],
  components: { SingleProduct },
};
</script>

<style scoped>
.product-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  grid-auto-rows: 500px;
  margin-left: 300px;
  margin-right: 300px;
  /* border: 1px solid green; */
}
</style>
