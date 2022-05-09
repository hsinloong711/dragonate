<template>
  <div class="background">
    <h2>Product List</h2>

    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'details', params: { id: product.id } }">
          <div
            class="product-image"
            style="
              background-image: url('https://source.unsplash.com/KikhsHzIO9o');
            "
          ></div>
          <div class="product-detail">
            <h4>{{ product.name.substring(0, 35) }}</h4>
            <p class="snippet">
              {{ product.description.substring(0, 130) }} . . .
            </p>
          </div>
        </router-link>
        <div class="flexbox">
          <p class="price">RM {{ product.price }}</p>
          <p class="stock">Stock: {{ product.stock }}</p>
        </div>
      </div>
    </div>
    <!-- 
    Display products and pass products props to ProductList.vue 
    <div class="border">
      <div v-if="products.length">
        <ProductList :products="products" />
      </div>

    Load spinner until data is fetched
      <div v-else>
        <Spinner />
      </div> -->

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
export default {
  name: "Shop",
  setup() {
    const { documents: products } = getCollection("products");

    return { products };
  },
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

.product-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  border: 1px solid #818182;
  -webkit-box-shadow: 0px 0px 5px 0px #fff;
  -moz-box-shadow: 0px 0px 5px 0px #fff;
  box-shadow: 0px 0px 5px 0px #fff;
  border-radius: 4px;
  padding: 10px;
  padding-bottom: 8px;
  width: 100%;
  height: 90%;
  overflow: hidden;
}

.product-image {
  height: 300px;
  background-color: white;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}

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

h4 {
  font-weight: 700;
  font-size: 19px;
  color: #d0a85c;
  margin-top: 0px;
}

.snippet {
  width: 100%;
  /* line-height: 20px; */
  background: -webkit-linear-gradient(#b8b8b8, #b8b8b8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font: "D-DIN", Arial;
  overflow: hidden;
}

p {
  display: inline;
}

.snippet:hover {
  color: white;
  background: -webkit-linear-gradient(white, #fff);
  background-clip: text;
  -webkit-background-clip: text;
}

.flexbox {
  display: flex;
  justify-content: space-between;
}

.stock {
  font-weight: 400;
  color: white;
  align-self: flex-end;
}

.price {
  display: block;
  color: #d0a85c;
  font-weight: 700;
  overflow: hidden;
  align-self: flex-end;
}

a {
  color: white;
  text-decoration: none;
}

p {
  align-self: flex-end;
  /* margin: auto 0; */
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
