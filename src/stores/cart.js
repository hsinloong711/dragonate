import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { useLocalStorage } from "@vueuse/core";
// import products from "@/data/db.json";

export const useCartStore = defineStore("cart", () => {
  const carts = ref([]);

  const addToCart = (itemName, itemSeller, itemPrice, itemUID) => {
    const newItem = {
      name: itemName,
      seller: itemSeller,
      price: itemPrice,
      uid : itemUID
    };
    carts.value.push(newItem);
  };

  return {
    carts,
    addToCart,
  };
});

// export const useProductStore = defineStore({
//   id: "ProductStore",
//   state: () => ({
//     counter: 0,
//     products: [],
//   }),
//   // getters: {
//   //   doubleCount: (state) => state.counter * 2,
//   // },
//   actions: {
//     fill() {
//       this.products = products;
//     },
//     increment() {
//       this.counter++;
//     },
//     decrement() {
//       this.counter--;
//     },
//   },
// });
