<template>
  <div class="article">
    <h2>My Project</h2>
    <div class="image">
      <img
        src="https://source.unsplash.com/-7BMThljOPg"
        alt=""
        height="550"
        width="703"
      />
    </div>
    <div class="content">
      <div class="fr" lang="fr">
        <h3>Mission</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ex
          ratione, corporis adipisci dolores veniam illum veritatis, quidem
          tempore fuga quod magni saepe amet nesciunt. Facere facilis obcaecati
          optio quo dolor in architecto laborum maiores incidunt animi dicta
          assumenda, veritatis provident doloremque! Mollitia doloremque,
          veritatis nisi molestiae placeat, eius magnam unde sit aspernatur
          dolor esse cupiditate aperiam ullam rerum debitis! Optio aliquam
          commodi labore sequi, neque aperiam quaerat dolorum dolor?
        </p>
      </div>
      <div class="en" lang="en">
        <h3>Vision</h3>
        <p>
          Tortor eu vestibulum elit lacinia ac sed pharetra odio egestas,
          placerat dolor sollicitudin dictum natoque lorem est etiam tristique
          convallis, at inceptos nisl tempus torquent neque nunc arcu.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.image {
  display: flex;
  justify-content: center;
  /* text-align: center; */
  margin: 50px;
}
body {
  background: black;
  margin: 2em;
}

h2 {
  color: white;
  margin: 50px;
  margin-top: 31px;
  font-size: 27px;
  text-align: center;
  font: "D-DIN", Arial;
  font-weight: 700;
}

h3 {
  color: white;
  text-transform: uppercase;
  /* font-size: 14px; */
  font-weight: 600;
  margin-bottom: 1em;
  /* font-size: 18px; */
}

p {
  color: white;
  font: "D-din";
  font-size: 14px;
  text-align: justify;
  font-size: 15px;
}

.article {
  color: black;
  height: 825px;
}

/* .title {
  text-align: center;
  max-width: 200px;
  margin: 0 auto 4em;
} */

.content {
  background: black;
  height: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2vw;
  /* padding-top: 20px; */
  padding-left: 300px;
  padding-right: 300px;
}
</style>
