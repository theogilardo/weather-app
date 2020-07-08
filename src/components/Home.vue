<template>
  <div>
    <div class="container">
      <section class="current-day">
        <search> </search>
        <img
          class="current-day__weather-icon"
          src="../assets/logo.png"
          alt="Weather icon"
        />
        <h1 class="current-day__temperature">12°C</h1>
        <h2 class="current-day__date">
          Monday, <span class="current-day__time">16:00</span>
        </h2>
        <p class="current-day__information">Mostly Cloudy</p>
        <p class="current-day__information">Rain - 30%</p>
        <h2 class="current-day__city">Paris</h2>
      </section>
      <section class="dashboard">
        <weekly> </weekly>
        <highlights> </highlights>
      </section>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
import Weekly from "./Weekly.vue";
import Highlights from "./Highlights.vue";

export default {
  name: "Home",
  components: {
    Search,
    Weekly,
    Highlights,
  },
};
</script>

<style lang="scss" scoped></style>
