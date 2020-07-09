<template>
  <div>
    <div class="current-day">
      <img
        class="current-day__weather-icon"
        src="../assets/logo.png"
        alt="Weather icon"
      />
      <h1 class="current-day__temperature">12°C</h1>
      <h2 class="current-day__date">
        Monday,
        <span class="current-day__time">16:00</span>
      </h2>
      <p class="current-day__information">Mostly Cloudy</p>
      <p class="current-day__information">Rain - 30%</p>
      <h2 class="current-day__city">Paris</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Today",
};
</script>

<style lang="scss" scoped>
.current-day {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__weather-icon {
    width: 50px;
  }
}
</style>
