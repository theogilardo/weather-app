<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("fetchCityWeather", "paris");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  /* 1 rem = 10px; 10px/16px = 62.5% */
  font-size: 62.5%;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);
  min-height: 100vh;
  width: 100%;
}
</style>
