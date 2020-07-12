<template>
  <div class="highlights-container">
    <h1 class="highlights-container__title">Today's highlights</h1>
    <div class="highlights-container__cards" v-if="cityWeather">
      <div class="card">
        <h1 class="card__title">Min/Max °C</h1>
        <!-- <img class="card__img" src="../../assets/sun.png" alt="weather icon" /> -->
        <p>{{ Math.trunc(cityWeather.temperature.min) }}°C</p>
        <p>{{ Math.trunc(cityWeather.temperature.max) }}°C</p>
      </div>
      <div class="card">
        <h1 class="card__title">Sunrise/Sunset</h1>
        <img class="card__img" src="../../assets/sunset.png" alt="weather icon" />
        <p class="card__text">15°C</p>
      </div>
      <div class="card">
        <h1 class="card__title">Pressure</h1>
        <img class="card__img" src="../../assets/pressure.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.pressure }}</p>
      </div>
      <div class="card">
        <h1 class="card__title">Humidity</h1>
        <img class="card__img" src="../../assets/humidity.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.humidity }}</p>
      </div>
      <div class="card">
        <h1 class="card__title">Cloud Coverage</h1>
        <img class="card__img" src="../../assets/clouds.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.cloudCoverage }}</p>
      </div>
      <div class="card">
        <h1 class="card__title">Wind Speed</h1>
        <img class="card__img" src="../../assets/wind.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.windSpeed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Highlights",
  data() {
    return {
      dataAvailable: false
    };
  },
  computed: {
    cityWeather() {
      return this.$store.getters.getCityWeather[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.highlights-container {
  margin-top: 2rem;

  &__title {
    font-size: 1.7rem;
    padding: 0 0 1rem 0.2rem;
    background-image: linear-gradient(#8360c3, #2ebf91);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 2px;
  }

  &__cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    padding: 1rem;
    border: none;
    background-color: white;
    border-radius: 10px;
    text-align: center;

    &__title {
      font-size: 1.1rem;
    }

    &__img {
      width: 35px;
      margin: 0.7rem 0;
    }

    &__text {
      display: inline-block;
      font-size: 0.9rem;
    }
  }
}
</style>
