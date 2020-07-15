<template>
  <div class="week-container" v-if="getWeekWeather">
    <div class="week-container__cards">
      <div class="card" :key="weather.id" v-for="weather in getWeekWeather">
        <h1>{{ weather.date }}</h1>
        <img :src="require(`../../assets/${weather.icon}.png`)" alt="Weather icon" />
        <p>{{ Math.trunc(weather.temperature.minmax.min)}}°/{{ Math.trunc(weather.temperature.minmax.max)}}°</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Week",
  computed: {
    getWeekWeather() {
      return this.$store.getters.getWeekWeather;
    }
  }
};
</script>

<style lang="scss" scoped>
.week-container {
  align-self: flex-start;
  width: 100%;

  &__cards {
    height: 8.5rem;
    width: 100%;
    display: flex;
    overflow: auto;
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
      font-size: 1.2rem;
    }

    p {
      display: inline-block;
      font-size: 0.9rem;
    }

    span {
      font-size: 0.6rem;
      opacity: 0.6;
    }
  }

  img {
    width: 25px;
    margin: 0.7rem 0;
    text-align: center;
  }
}
</style>
