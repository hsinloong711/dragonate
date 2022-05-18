<template>
  <div class="background">
    <h2>Your Purchase</h2>

    <div class="photo-details">
      <p>Package</p>
      <p>Payment</p>
      <p>Order ID</p>
      <p>Time</p>
    </div>

    <div v-if="purchasedUsers">
      <div
        class="photo-list"
        v-for="purchasedUser in purchasedUsers"
        :key="purchasedUser.id"
      >
        <div class="photo-detail">
          <img
            src="https://cdn.arstechnica.net/wp-content/uploads/2021/11/starlink-dish-and-router.jpg"
            class="photo"
            alt="Vue 3 Photo"
            width="100"
            height="100"
          />
          <p class="detail">RM 400</p>
          <p class="detail1">{{ purchasedUser.id }}</p>
          <p class="detail2">{{ purchasedUser.dateTime }}</p>
        </div>
      </div>
    </div>

    <!-- <div v-else>Loading</div> -->
  </div>
</template>

<script>
import getUser from "../composables/getUser";
import getCollection from "../composables/getCollection";

export default {
  setup() {
    const { name, uid } = getUser();
    const { documents: purchasedUsers } = getCollection("purchasedUsers", [
      "uid",
      "==",
      uid.value,
    ]);

    return { name, uid, purchasedUsers };
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
  padding-left: 3px;
}

.detail1 {
  padding-left: 70px;
}

.detail2 {
  padding-left: 70px;
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

a {
  color: white;
  text-decoration: none;
}
</style>
