<template>
  <div>
    <div class="container">
      <section class="current-day">
        <div class="current-day__weather-icon">
          <img src="../assets/logo.png" alt="Weather icon" />
          <h1 class="current-day__temperature">12°C</h1>
          <h2 class="current-day__date">
            Monday, <span class="current-day__time">16:00</span>
          </h2>
          <p class="current-day__information">Mostly Cloudy</p>
          <p class="current-day__information">Rain - 30%</p>
          <h2 class="current-day__city">Paris</h2>
        </div>
      </section>
      <section class="dashboard"></section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped></style>
