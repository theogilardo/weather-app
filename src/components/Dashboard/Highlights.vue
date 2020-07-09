<template>
  <div class="highlights-container">
    <h1 class="highlights-container__title">Today's highlights</h1>
    <div class="highlights-container__cards">
      <div class="card">
        <h1 class="card__title">Min/Max °C</h1>
        <img class="card__img" src="../../assets/sun.png" alt="weather icon" />
        <p>{{ cityWeather.temperature.min }}</p>
        <p>{{ cityWeather.temperature.max }}</p>
      </div>
      <div class="card">
        <h1 class="card__title">Sunrise/Sunset</h1>
        <img class="card__img" src="../../assets/sun.png" alt="weather icon" />
        <p class="card__text">15°C</p>
      </div>
      <div class="card">
        <h1 class="card__title">Pressure</h1>
        <img class="card__img" src="../../assets/sun.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.pressure }}</p>
      </div>
      <div class="card">
        <h1 class="card__title">Humidity</h1>
        <img class="card__img" src="../../assets/sun.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.humidity }}</p>
      </div>
      <div class="card">
        <h1 class="card__title">Cloud Coverage</h1>
        <img class="card__img" src="../../assets/sun.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.cloudCoverage }}</p>
      </div>
      <div class="card">
        <h1 class="card__title">Wind Speed</h1>
        <img class="card__img" src="../../assets/sun.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.windSpeed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Highlights",
  computed: {
    cityWeather() {
      return this.$store.getters.cityWeather;
    },
  },
};
</script>

<style lang="scss" scoped>
.highlights-container {
  margin-top: 2rem;

  &__title {
    font-size: 1.6rem;
    padding: 0 0 1rem 0.2rem;
  }

  &__cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  // card

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

    &__img {
      width: 25px;
      margin: 0.7rem 0;
    }

    &__title {
    }

    &__text {
      display: inline-block;
    }
  }
}
</style>
