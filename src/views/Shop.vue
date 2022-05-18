<template>
  <div class="background">
    <h2>Photo Collection</h2>

    <div class="photo-list">
      <div class="photo-card" v-for="photo in photos" :key="photo.id">
        <router-link :to="{ name: 'details', params: { id: photo.id } }">
          <div
            class="photo-image"
            style="
              background-image: url('https://blog.logrocket.com/wp-content/uploads/2020/04/Vue-3.png');
            "
          ></div>
          <div class="photo-detail">
            <h4>{{ photo.title.substring(0, 35) }}</h4>
            <p class="snippet">
              {{ photo.description.substring(0, 100) }}
            </p>
          </div>
        </router-link>
        <div class="flexbox">
          <p class="seller">{{ photo.name }}</p>
          <p class="dateTime">{{ photo.dateTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import getUser from "../composables/getUser";
import getCollection from "../composables/getCollection";
import { computed, ref } from "vue";
export default {
  name: "Shop",
  setup() {
    const { name, uid } = getUser();
    const { documents: photos } = getCollection("photos");

    return { photos, name, uid };
  },
};
</script>

<style scoped>
.photo-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  grid-auto-rows: 500px;
  margin-left: 300px;
  margin-right: 300px;
  /* border: 1px solid green; */
}

.photo-card {
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
  /* background-image: linear-gradient(180deg, black 10%, #13120e 75%); */
}

.photo-image {
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
  /* font-weight: 400; */
  font-size: 19px;
  color: white;
  margin-top: 0px;
}

.snippet {
  width: 100%;
  /* line-height: 20px; */
  /* background: -webkit-linear-gradient(#b8b8b8, #b8b8b8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  /* font-weight: 7 */
  font: "D-DIN", Arial;
  overflow: hidden;
  /* color: #b8b8b8; */
  /* font-weight: 700; */
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

.dateTime {
  font-weight: 400;
  color: white;
  align-self: flex-end;
  color: #b8b8b8;
}

.seller {
  display: block;
  color: #d9fcf2;
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
