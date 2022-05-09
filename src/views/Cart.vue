<template>
  <!-- Takes in counter state -->
  <!-- <p>Store counter:{{ store.counter }}</p>
  <button @click="store.increment()">+</button>
  <button @click="store.decrement()">-</button> -->
  <!-- <p>Name is {{ store.cart.name }}</p>
  <p>Seller is {{ store.cart.seller }}</p>
  <p>Price is {{ store.cart.price }}</p> -->
  <!-- <div v-for="cart in carts" :key="cart.id">{{ store.carts }}</div> -->
  <p>Hi {{ store.carts }}</p>
  <!-- <input type="text" placeholder="New Name" v-model="nameInput" /> -->
  <!-- <button @click="handleSubmit">Change Name</button> -->
  <!-- <p>{{ cartItem }}</p> -->
</template>

<script>
import { useCartStore } from "../stores/cart";
import { ref } from "vue";

export default {
  props: [],
  setup() {
    // console.log(props.products);
    const store = useCartStore();

    return { store };
  },
};

// store.product.name
// store.product.seller
//store.product.price
</script>

<style></style>
