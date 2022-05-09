<template>
  <!-- <div v-if="error">{{ error }}</div> -->

  <div v-if="product" class="grid">
    <div class="product-image">
      <div class="image-container">
        <div
          class="image-main"
          style="
            background-image: url('https://source.unsplash.com/KikhsHzIO9o');
          "
        ></div>
      </div>
    </div>

    <div class="product-detail">
      <h2>{{ product.name }}</h2>

      <div>
        <h2 class="price">RM {{ product.price }}</h2>
      </div>

      <div class="description">
        <h3>Stock</h3>
        <p>{{ product.stock }}</p>
      </div>

      <div>
        <h3>Description</h3>
        <p>{{ product.description }}</p>
      </div>

      <!-- <button class="buy--btn">ADD TO CART</button> -->
    </div>
  </div>
  <div class="grid1">
    <div class="left-grid">
      <!-- <p class="user">{{ product.loggedInUser }}</p> -->
      <!-- <router-link :to="{ name: 'user', params: { id: uid }}">{{ product.user }}</router-link> -->
    </div>

    <div class="right-grid">
      <button @click="handleSubmit">Add To Cart</button>
      <button @click="handleDelete">Delete this</button>
    </div>
  </div>
</template>

<script>
// import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import getCollection from "../composables/getCollection";
import getUser from "../composables/getUser";
import { ref } from "vue";

export default {
  components: {},
  setup() {
    // const router = useRouter();
    const { seller, uid } = getUser();
    const { documents: products } = getCollection("products");

    const name = ref("");
    const price = ref("");
    const stock = ref("");
    const description = ref("");

    const product = async (id) => {
      const docRef = collection(db, c).doc(id).get();

      await getDoc(docRef, {
        name: name.value,
        description: description.value,
        stock: stock.value,
        price: price.value,
        seller: seller.value,
        uid: uid.value,
      });
    };

    return {
      name,
      price,
      stock,
      description,
      seller,
      uid,
      product,
      products,
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
  grid-auto-rows: 450px;
  border-radius: 4px;
  padding: 10px;
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 220px;
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

/* .product-details {
  margin-right: 200px;
} */

.description {
  margin-top: 30px;
  margin-bottom: 25px;
  /* margin-bottom: 36px; */
}

p {
  font: "D-din";
  /* font-weight: 700; */
  font-size: 16px;
  width: 95%;
  /* font-weight: 700; */
}

h2 {
  display: block;
  margin-bottom: 0.1em;
  text-align: left;
  font-size: 24px;
  font: "D-DIN", Arial;
  color: #d0a85c;
  font-weight: 700;
}

h3 {
  background: -webkit-linear-gradient(#b8b8b8, #b8b8b8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  /* color: #b8b8b8;
  font-weight: 700; */
}

.price {
  padding-top: 10px;
  /* font-size: 40px; */
}

.grid1 {
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  grid-auto-rows: 100px;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 220px;
}

.user {
  margin-left: 120px;
  border: 1px dotted hsla(160, 100%, 37%, 1);
  height: 26%;
  width: 20%;
  text-align: center;
  color: hsla(160, 100%, 37%, 1);
  font-weight: 700;
  font-size: 14.5px;
  overflow: hidden;
}
</style>
