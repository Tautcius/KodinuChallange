<template>
  <button @click="startGame()">Start game</button>
  <p>{{ flips }}</p>
  <div class="container">
    <Card
      v-for="(infos, index) in info"
      v-bind:key="infos.name"
      :path="infos.path"
      :name="infos.name"
      :card-id="['card_' + index]"
      @click="flipCardMethod(index)"
      :class="flip"
    />
  </div>
</template>

<script>
import Data from "./data.js";
import Card from "./components/card.vue";
export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return {
      activeCard: null,
      info: [],
      isActive: true,
      arrayToShuffle: [],
      flips: 0,
      time: 0,
      dificulty: 0
    };
  },
  methods: {
    shuffle(array) {
      const arrayToReturn = [];
      while (array.length !== 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        arrayToReturn.push(array[randomIndex]);
        array.splice(randomIndex, 1);
      }
      return arrayToReturn;
      console.log(arrayToReturn.length);
    },
    startGame() {
      const startArray = Data.splice(0, Data.length - 2);
      this.arrayToShuffle = startArray.concat(startArray);
      this.info = this.shuffle(this.arrayToShuffle);
      this.arrayToShuffle = [];
    },
    flipCardMethod(index) {
      console.log("card index " + index);
    },
    checkMatch() {}
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
</style>