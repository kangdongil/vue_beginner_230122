<template>
  <div class="black-bg" @click="closeModal" v-if="isModal">
    <div class="white-bg">
      <button @click="closeModal">X</button>
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
    </div>
  </div>
  <div class="menu">
    <a v-for="item in menu" :key="item">{{ item }}</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div v-for="(product, index) in products" :key="product">
    <img :src="products[index].image" class="room-img" />
    <h4 :style="fontcolorblue" @click="isModal = true">
      {{ products[index].title }}
    </h4>
    <p>{{ products[index].content }}</p>
    <p>{{ products[index].price }} 원</p>
    <button @click="increase(index, products)">허위매물신고</button>
    <span>신고수 : {{ products[index].report }}</span>
  </div>
</template>

<script>
import data from "./assets/data";

export default {
  name: "App",
  data() {
    return {
      menu: ["Home", "Shop", "About"],
      isModal: false,
      fontcolorblue: "color : blue",
      products: data,
    };
  },
  methods: {
    closeModal(e) {
      if (e.target !== e.currentTarget) return;
      this.isModal = false;
    },
    increase(index, products) {
      products[index].report += 1;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
