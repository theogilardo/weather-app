<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (localStorage.getItem("activeCity")) {
      const city = JSON.parse(localStorage.getItem("activeCity"))[0].location
        .name;
      // const cityFormatted = city[0].location.name;
      this.$store.dispatch("fetchCityWeather", city);
    } else {
      this.$store.dispatch("fetchCityWeather", "paris");
    }
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
  font-size: 62.5%;
  background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);
}
</style>
