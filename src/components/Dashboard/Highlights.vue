<template>
  <div class="highlights-container">
    <h1 class="highlights-container__title">Today's highlights</h1>
    <div class="highlights-container__cards" v-if="cityWeather">
      <div class="card">
        <h1 class="card__title">Humidity</h1>
        <img class="card__img" src="../../assets/humidity.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.humidity }}%</p>
      </div>

      <div class="card">
        <h1 class="card__title">Pressure</h1>
        <img class="card__img" src="../../assets/pressure.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.pressure }}hPa</p>
      </div>

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
        <h1 class="card__title">Cloud Coverage</h1>
        <img class="card__img" src="../../assets/clouds.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.cloudCoverage }}%</p>
      </div>
      <div class="card">
        <h1 class="card__title">Wind Speed</h1>
        <img class="card__img" src="../../assets/wind.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.highlight.windSpeed }}m/s</p>
      </div>

      <div class="card--suntime">
        <!-- <h1 class="card__title">Sunrise/Sunset</h1> -->
        <!-- <div class="test"> -->
        <div class="card--suntime__box card--suntime__box--sunrise">
          <img class="card--suntime__img" src="../../assets/sunrise.png" alt="weather icon" />
          <p>{{ cityWeather.sunTime.sunrise}}</p>
        </div>
        <div class="card--suntime__box card--suntime__box--sunset">
          <img class="card--suntime__img" src="../../assets/sunset.png" alt="weather icon" />
          <p>{{ cityWeather.sunTime.sunset}}</p>
        </div>
        <!-- </div> -->
      </div>
      <!-- <div class="card">
        <h1 class="card__title">Sunrise/Sunset</h1>
        <img class="card__img" src="../../assets/sunset1.png" alt="weather icon" />
        <p class="card__text">{{ cityWeather.sunTime.sunrise}} | {{ cityWeather.sunTime.sunset}}</p>
      </div>-->
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
.test {
  display: flex;
  align-items: center;
  justify-self: center;
}

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
      // background-image: linear-gradient(
      //   to right,
      //   #72edf233,
      //   #5151e533,
      //   #ff7b0033,
      //   #ff000033
      // );
      // background: linear-gradient(
      //   90deg,
      //   rgba(153, 195, 250, 0.6516981792717087) 0%,
      //   rgba(73, 182, 221, 0.5144432773109244) 9%,
      //   rgba(251, 113, 68, 0.6881127450980392) 85%
      // // );

      // background: linear-gradient(
      //   90deg,
      //   rgba(153, 195, 250, 0.304359243697479) 0%,
      //   rgba(73, 182, 221, 0.3295693277310925) 2%,
      //   rgba(251, 113, 68, 0.3435749299719888) 86%
      // );

      border-radius: 10px;
      overflow: hidden;
      text-align: center;

      &__icon {
        width: 50px;
        transform: translateX(5px);
        margin-bottom: 0.7rem;
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
        font-weight: 700;

        // border: 1px solid red;

        &--min {
          // background-color: rgba(129, 170, 216, 0.308);
          // background-image: linear-gradient(#72edf233, #5151e533);
          background-color: white;

          color: #333;
        }

        &--max {
          // background-color: rgba(212, 101, 101, 0.308);
          // background-image: linear-gradient(#fdd81933, #e8050533);
          background-color: #333333;

          // background-color: rgba(212, 101, 101, 0.308);
          color: white;
        }
      }
    }

    &--suntime {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      // flex-direction: column;
      // padding: 0.6rem;
      border: none;
      // background-color: white;
      // background-image: linear-gradient(to right, #f5621745, #0b486b45);

      border-radius: 10px;
      overflow: hidden;
      text-align: center;

      &__box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        font-weight: 700;

        &--sunrise {
          background-color: white;
          color: #333;
        }

        &--sunset {
          background-color: #333333;
        }
      }

      &__img {
        width: 35px;
        margin: 0.7rem 0;
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
