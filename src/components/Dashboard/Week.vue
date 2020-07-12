<template>
  <div class="week-container" v-if="cityWeather">
    <h1 class="week-container__title">Week</h1>
    <div class="week-container__cards">
      <div class="card" :key="weather.id" v-for="weather in cityWeather">
        <h1>{{ weather.date }}</h1>
        <img :src="`${weather.icon}`" alt="weather icon" />
        <p>{{ Math.trunc(weather.temperature.main) }}°</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Week",
  computed: {
    cityWeather() {
      return this.$store.getters.getCityWeather;
    }
  }
};
</script>

<style lang="scss" scoped>
.week-container {
  align-self: flex-start;
  width: 100%;

  &__title {
    font-size: 1.6rem;
    padding: 0 0 1rem 0.2rem;
    background-image: linear-gradient(#8360c3, #2ebf91);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 2px;
  }

  &__cards {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    border: none;
    background-color: white;
    border-radius: 10px;
    margin: 0 0.4rem;
    text-align: center;

    h1 {
      font-size: 1.1rem;
    }

    p {
      display: inline-block;
      font-size: 0.9rem;
    }
  }

  img {
    width: 25px;
    margin: 0.7rem 0;
  }

  span {
    color: rgb(158, 158, 158);
  }
}
</style>
