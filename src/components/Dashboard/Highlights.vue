<template>
  <div class="highlights-container">
    <h1 class="highlights-container__title">Today's highlights</h1>
    <div class="highlights-container__cards" v-if="currentCityWeather">
      <div class="card">
        <h1 class="card__title">Humidity</h1>
        <img class="card__img" src="../../assets/humidity.png" alt="Humidity weather icon" />
        <p class="card__text">{{ currentCityWeather.highlight.humidity }}%</p>
      </div>

      <div class="card">
        <h1 class="card__title">Pressure</h1>
        <img class="card__img" src="../../assets/pressure.png" alt="Pressure weather icon" />
        <p class="card__text">{{ currentCityWeather.highlight.pressure }}hPa</p>
      </div>

      <div class="card--minmax">
        <div class="card--minmax__temp card--minmax__temp--min">
          <img class="card--minmax__icon" src="../../assets/cold.png" alt="Cold weather icon" />
          <p>{{ currentCityWeather.temperature.minmax.min | trunc }}°</p>
        </div>
        <div class="card--minmax__temp card--minmax__temp--max">
          <img class="card--minmax__icon" src="../../assets/hot.png" alt="Hot weather icon" />

          <p>{{ currentCityWeather.temperature.minmax.max | trunc }}°</p>
        </div>
      </div>
      <div class="card">
        <h1 class="card__title">Cloud Coverage</h1>
        <img class="card__img" src="../../assets/clouds.png" alt="Cloud coverage weather icon" />
        <p class="card__text">{{ currentCityWeather.highlight.cloudCoverage }}%</p>
      </div>
      <div class="card">
        <h1 class="card__title">Wind Speed</h1>
        <img class="card__img" src="../../assets/wind.png" alt="Wind speed weather icon" />
        <p class="card__text">{{ currentCityWeather.highlight.windSpeed }}m/s</p>
      </div>

      <div class="card--suntime">
        <div class="card--suntime__box card--suntime__box--sunrise">
          <img class="card--suntime__img" src="../../assets/sunrise.png" alt="Sunrise icon" />
          <p>{{ currentCityWeather.sunTime.sunrise}}</p>
        </div>
        <div class="card--suntime__box card--suntime__box--sunset">
          <img class="card--suntime__img" src="../../assets/sunset.png" alt="Sunset icon" />
          <p>{{ currentCityWeather.sunTime.sunset}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Highlights",
  computed: mapGetters(["currentCityWeather"]),
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
    padding: 1rem;
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
      border: none;
      background-color: white;
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

        &--min {
          background-color: white;

          color: #333;
        }

        &--max {
          background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);
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
      border: none;
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
          background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);
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

// Media queries
@media only screen and (max-width: 670px) {
  .highlights-container__cards {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .card {
    padding: 0.5rem;

    &--minmax {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }

    &--suntime {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
  }
}

@media only screen and (max-width: 450px) {
  .highlights-container__title {
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem 0 1rem 0;
  }
}
</style>
