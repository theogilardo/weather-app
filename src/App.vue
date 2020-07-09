<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>

<script>
// export default {};
//
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
  background-image: linear-gradient(to right bottom, #a80262, #f90f42);
  min-height: 100vh;
  width: 100%;
}
</style>
