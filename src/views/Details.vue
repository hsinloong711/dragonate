<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="product" class="grid">
    <div class="product-image">
      <div class="image-container">
        <div
          class="image-main"
          style="
            background-image: url('https://source.unsplash.com/dBwadhWa-lI');
          "
        ></div>
      </div>
    </div>

    <div class="product-details">
      <h1>{{ product.name }}</h1>

      <div>
        <!-- <h3>Price</h3> -->
        <p class="price">RM {{ product.price }}</p>
      </div>

      <div class="description">
        <h3>Stock</h3>
        <p>{{ product.stock }}</p>
      </div>

      <div>
        <h3>Description</h3>
        <p>{{ product.description }}</p>
      </div>

      <button @click="handleDelete" v-if="ownership">Delete this</button>
      <!-- <button class="buy--btn">ADD TO CART</button> -->
    </div>
  </div>
  <p>{{ product.user }} | {{ product.timestamp }} |{{ product.uid }}</p>
</template>

<script>
import getProduct from "../composables/getProduct";
import Spinner from "../components/Spinner.vue";
import getUser from "../composables/getUser";

import { computed } from "vue";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    const { product, error, load } = getProduct(props.id);
    const { user, uid } = getUser();

    const ownership = computed(() => {
      return product.value && uid.value == product.value.uid;
    });

    // const handleDelete = async () => {
    //   await deleteDoc();
    // };

    load();

    return {
      product,
      error,
      user,
      uid,
      ownership,
    };
  },
};
</script>

<style scoped>
* {
  overflow: hidden;
}

img {
  max-width: 100%;
  filter: drop-shadow(1px 1px 3px #b8b8b8);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  grid-auto-rows: 560px;
  border-radius: 4px;
  padding: 10px;
  padding-top: 10px;
  margin-top: 30px;
}

.image-container {
  position: absolute;
  display: grid;
  width: 70%;
  height: 100%;
  overflow: hidden;
  border-radius: 6px;
  margin-left: 100px;
  border: 1px solid #818182;
  -webkit-box-shadow: 0px 0px 5px 0px #fff;
  -moz-box-shadow: 0px 0px 5px 0px #fff;
  box-shadow: 0px 0px 5px 0px #fff;
  border-radius: 4px;
}
.image-main {
  background-color: white;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.description {
  display: block;
  margin-top: 30px;
  margin-bottom: 25px;
  /* margin-bottom: 36px; */
}

p {
  font: "D-din";
  font-weight: 400;
  font-size: 16px;
  width: 95%;
}

h1 {
  /* margin-bottom: 0.1em;
  font-size: 1.5em; */
  text-align: left;
  font-weight: 700;
  background: -webkit-linear-gradient(white, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: "D-DIN", Arial;
}

h3 {
  background: -webkit-linear-gradient(white, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: "D-DIN", Arial;
}

.price {
  color: hsla(160, 100%, 37%, 1);
  font-size: 33px;
  /* margin-top: 16px; */
  font-weight: 700;
}
</style>
