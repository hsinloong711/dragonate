<template>
  <div class="cards">
    <router-link :to="{ name: 'details', params: { id: product.id } }">
      <div
        class="image-container"
        style="background-image: url('https://source.unsplash.com/dBwadhWa-lI')"
      ></div>
      <div class="details">
        <h4>{{ product.name }}</h4>
        <p class="snippet">{{ snippet }}</p>
      </div>
    </router-link>

    <div class="flex">
      <p class="stock">Stock: {{ product.stock }}</p>
      <p class="price">RM {{ product.price }}</p>
    </div>
  </div>
  <!-- <button>Hi</button> -->
</template>

<script>
import { computed } from "vue";

export default {
  props: ["product"],
  setup(props) {
    console.log(props.products);
    const snippet = computed(() => {
      return props.product.description.substring(0, 130) + "...See more";
    });

    return { snippet };
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* padding: 10px; */
  border: 1px solid #818182;
  -webkit-box-shadow: 0px 0px 5px 0px #fff;
  -moz-box-shadow: 0px 0px 5px 0px #fff;
  box-shadow: 0px 0px 5px 0px #fff;
  border-radius: 2px;
  /* padding: 10px; */
  padding: 10px;
  padding-bottom: 8px;
  width: 100%;
  height: 90%;
  overflow: hidden;
}
.image-container {
  height: 300px;
  background-color: white;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 5px;
}

a {
  color: white;
  text-decoration: none;
}

.flex {
  display: flex;
  justify-content: space-between;
}

p {
  align-self: flex-end;
  /* margin: auto 0; */
}

h4 {
  font-weight: 400;
  font-size: 20px;
  /* color: green; */
}

.snippet {
  color: #b8b8b8;
  width: 100%;
  line-height: 20px;
}

.snippet:hover {
  color: white;
}

h3 {
  font-size: 22px;
  font-weight: 700;
}

.stock {
  color: #b8b8b8;
  font-weight: 700;
}

.price {
  color: hsla(160, 100%, 37%, 1);
  font-weight: 700;
}

.button {
  margin: 10px;
}
</style>
