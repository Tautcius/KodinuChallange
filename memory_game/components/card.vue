<template>
  <div class="card" :class="class" :name="name" :card-id="id">
    <img src="../asset/Kodinu.png" alt class="back" />
    <img :src="path" alt class="front" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["path", "name"],
  data() {
    return {
      isActive: true,
      id: null
    };
  },
  // methods: {
  //   flipCardMethod() {
  //     this.flipCard = !this.flipCard;
  //   }
  // },
  mounted() {
    this.id = this._uid;
  }
};
</script>

<style>
.card {
  width: calc(25vh);
  height: calc(25vh);
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.4s;
  display: flex;
  background: darkseagreen;
}
.card:active {
  transform: scale(0.97);
  transition: transform 0.2s;
}
.card.flip {
  transform: rotateY(180deg);
}
.front,
.back {
  border-radius: 5px;
  background: darkseagreen;
  backface-visibility: hidden;
  width: 100%;
  position: absolute;
}
.front {
  transform: rotateY(180deg);
}
img {
  max-width: 100%;
  align-self: center;
}
</style>