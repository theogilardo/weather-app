<template>
  <div class="highlights-container">
    <h1 class="highlights-container__title">Today's highlights</h1>
    <div class="highlights-container__cards" v-if="cityWeather">
      <div class="card--minmax">
        <!-- <h1 class="card--minmax__title">Min/Max °C</h1> -->
        <div class="card--minmax__temp card--minmax__temp--min">
          <img class="card--minmax__icon" src="../../assets/cold.png" alt="Cold icon" />
          <p>{{ Math.trunc(cityWeather.temperature.minmax.min) }}°</p>
        </div>
        <div class="card--minmax__temp card--minmax__temp--max">
          <img class="card--minmax__icon" src="../../assets/hot.png" alt="Hot icon" />

          <p>{{ Math.trunc(cityWeather.temperature.minmax.max) }}°</p>
        </div>
      </div>
      <div class="card">
        <h1 class="card__title">Sunrise/Sunset</h1>
        <img class="card__img" src="../../assets/sunset.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.sunTime.sunrise}} | {{ cityWeather.sunTime.sunset}}</p>
      </div>
      <div class="card">
        <h1 class="card__title">Pressure</h1>
        <img class="card__img" src="../../assets/pressure.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.pressure }}hPa</p>
      </div>
      <div class="card">
        <h1 class="card__title">Humidity</h1>
        <img class="card__img" src="../../assets/humidity.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.humidity }}%</p>
      </div>
      <div class="card">
        <h1 class="card__title">Cloud Coverage</h1>
        <img class="card__img" src="../../assets/clouds.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.cloudCoverage }}%</p>
      </div>
      <div class="card">
        <h1 class="card__title">Wind Speed</h1>
        <img class="card__img" src="../../assets/wind.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.windSpeed }}m/s</p>
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
    },
    minMaxTemp() {
      return this.$store.getters.getMinMaxTemp;
    }
  }
};
</script>

<style lang="scss" scoped>
.highlights-container {
  margin-top: 1rem;

  &__title {
    font-size: 1.7rem;
    padding: 0 0 1rem 0.2rem;
    background-image: linear-gradient(#8360c3, #2ebf91);
    background-clip: text;
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
    padding: 0.6rem;
    border: none;
    background-color: white;
    border-radius: 10px;
    text-align: center;

    &--minmax {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      // flex-direction: column;
      // padding: 0.6rem;
      border: none;
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      text-align: center;

      &__icon {
        width: 50px;
        transform: translateX(5px);
        margin-bottom: 0.4rem;
      }

      &__title {
        width: 100%;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.1rem;
      }

      &__temp {
        width: 100%;
        height: 100%;
        padding: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.2rem;
        // border: 1px solid red;

        &--min {
          // background-color: rgba(129, 170, 216, 0.308);
          background-image: linear-gradient(#72edf233, #5151e533);
          color: #4893ff;
          font-weight: 700;
        }

        &--max {
          // background-color: rgba(212, 101, 101, 0.308);
          background-image: linear-gradient(#fdd81933, #e8050533);
          // background-color: rgba(212, 101, 101, 0.308);
          color: #f95e6e;
          font-weight: 700;
        }
      }
    }

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
