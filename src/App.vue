<template>
  <div class="menu">
    <a v-for="item in menu" :key="item">{{ item }}</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div v-for="(product, index) in products" :key="product">
    <h4 :style="fontcolorblue">{{ products[index].name }}</h4>
    <p>{{ products[index].price }} 만원</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: ["Home", "Shop", "About"],
      fontcolorblue: "color : blue",
      products: [
        {
          name: "역삼동원룸",
          price: 60,
        },
        {
          name: "천호동원룸",
          price: 70,
        },
        {
          name: "마포구원룸",
          price: 80,
        },
      ],
    };
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
  margin-top: 60px;
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
</style>
