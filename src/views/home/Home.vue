<script>
import HomeInput from "@/components/HomeInput.vue";
export default {
  name: "Home",
  components: {
    HomeInput,
  },
  setup() {
    let header = "Order D-Nate";
    let description =
      "High-speed, interference-free, world-wide networking is available everywhere.";
    let descriptionOne =
      "Connecting life and passion to other meaningful moments.";

    return { header, description, descriptionOne };
  },
};
</script>

<template>
  <div class="background">
    <div class="backdrop">
      <h2>{{ header }}</h2>
      <p>{{ description }}</p>
      <p>{{ descriptionOne }}</p>
      <HomeInput />
    </div>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  overflow: hidden;
}
.background {
  background-image: url("https://source.unsplash.com/Q1p7bh3SHj8");
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 825px;
}

.backdrop {
  margin: auto;
  width: 800px;
}

h2 {
  display: block;
  text-align: center;
  font: 50px/100px "D-DIN", Arial;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  letter-spacing: 0;
  padding-top: 28px;
}

p {
  display: block;
  text-align: center;
  font: 14px/20px "D-DIN", Arial;
  color: white;
  font-weight: 400;
  max-width: 1687px;
}
</style>
