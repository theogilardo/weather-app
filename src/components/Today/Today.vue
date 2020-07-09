<template>
  <!-- <div> -->
  <div class="current-day">
    <img
      class="current-day__weather-icon"
      src="../../assets/sun.png"
      alt="Weather icon"
    />
    <h1 class="current-day__temperature">12°C</h1>
    <h2 class="current-day__date">
      Monday,
      <span class="current-day__time">16:00</span>
    </h2>
    <p class="current-day__information">Mostly Cloudy</p>
    <p class="current-day__information">Rain - 30%</p>
    <div class="current-day__city">
      <h2 class="current-day__city__name">NYC, USA</h2>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Today",
};
</script>

<style lang="scss" scoped>
.current-day {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;

  &__weather-icon {
    width: 100px;
    margin: 2rem;
  }

  &__date {
    margin-bottom: 2rem;
  }

  &__temperature {
    font-size: 3rem;
  }

  &__city {
    position: relative;
    z-index: 4;
    margin-top: auto;
    background-image: url(../../assets/nyc.jpg);
    background-position: center;
    background-size: cover;
    width: 80%;
    padding: 3rem 0;
    border-radius: 10px;
    overflow: hidden;

    &__name {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #33333350;
      color: white;
    }
  }
}
</style>
