<template>
  <div class="background">
    <h2>Your Photo</h2>

    <div class="photo-details">
      <p>Image</p>
      <p>Title</p>
      <p>Photo ID</p>
      <p>Time</p>
    </div>

    <div v-if="photos">
      <div class="photo-list" v-for="photo in photos" :key="photo.id">
        <div class="delete-box">
          <button class="delete" @click="handleDelete(photo)">X</button>
        </div>
        <!-- <div
            class="photo-image"
            style="
              background-image: url('https://blog.logrocket.com/wp-content/uploads/2020/04/Vue-3.png');
            "
          ></div> -->
        <div class="photo-detail">
          <!-- <router-link :to="{ name: 'details', params: { id: photo.id } }"> -->
          <img
            src="https://blog.logrocket.com/wp-content/uploads/2020/04/Vue-3.png"
            class="photo"
            alt="Vue 3 Photo"
            width="100"
            height="100"
          />
          <p class="detail">
            {{ photo.title.substring(0, 20) }}
          </p>
          <p class="detail1">{{ photo.id }}</p>
          <p class="detail2">{{ photo.dateTime }}</p>
        </div>
      </div>
    </div>

    <!-- <div v-else>Loading</div> -->
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import getUser from "../composables/getUser";
import getCollection from "../composables/getCollection";
export default {
  name: "Shop",
  setup() {
    const { name, uid } = getUser();
    const { documents: photos } = getCollection("photos", [
      "uid",
      "==",
      uid.value,
    ]);

    const handleDelete = (photo) => {
      const docRef = doc(db, "photos", photo.id);

      deleteDoc(docRef);
    };

    return { photos, name, uid, handleDelete };
  },
};
</script>

<style scoped>
.photo-list {
  margin: 20px;
  padding: 20px;
  padding-top: 0px;
  border-bottom: 1px solid #818182;
  /* border-top: 1px solid #b8b8b8; */
  margin-right: 300px;
  margin-left: 300px;
}

.photo-details {
  margin-left: 300px;
  margin-right: 300px;
  display: flex;
  justify-content: space-around;
  font-weight: 700;
  color: #b8b8b8;
  padding-bottom: 5px;
  border-bottom: 1px solid #818182;
}

.photo-detail {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /* padding-left: 15px; */
  /* margin-left: 300px;
  margin-right: 300px; */
}

.detail {
  padding-left: 35px;
}

.detail1 {
  padding-left: 70px;
}

.detail2 {
  padding-left: 100px;
}

.photo-card {
  display: flex;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.photo-image {
  height: 100px;
  width: 100px;
  margin-right: 1000px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.photo {
  margin: auto;
}

p {
  margin: auto;
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

.delete-box {
  margin: auto;
  text-align: center;
}
.delete {
  float: right;
  display: flex;
  margin: auto;
  /* margin-right: 300px; */
  /* margin-left: 15px; */
  margin-top: 30px;
  background-color: red;
  color: white;
  border: 1px solid #222;
  border-radius: 2px;
  padding: 10px;
}

.delete:active {
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  transform: translateY(4px);
}

a {
  color: white;
  text-decoration: none;
}
</style>
