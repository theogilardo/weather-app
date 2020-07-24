<template>
  <div class="current-day" v-if="currentCityWeather" :class="{aniFavorites: getShowFavorites}">
    <div class="current-day__box">
      <h2 class="current-day__date">{{ currentCityWeather.date }}</h2>
      <p class="current-day__box__information">"{{ currentCityWeather.highlight.description }}"</p>
      <img
        class="current-day__weather-icon"
        :src="require(`../../assets/${currentCityWeather.icon}.png`)"
        alt="Weather icon"
      />
    </div>
    <div class="current-day__temperature">
      <h1>{{ currentCityWeather.temperature.main | trunc }}°</h1>
    </div>
    <div class="current-day__city">
      <img class="current-day__city__img" :src="currentCityWeather.image" alt="City photo" />
      <a @click="storeCity(currentCityWeather.location.name)">
        <p class="current-day__city__add-to-fav">+</p>
      </a>
      <h2
        class="current-day__city__name"
      >{{ currentCityWeather.location.name }} ({{ currentCityWeather.location.country }})</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Today",
  computed: mapGetters([
    "currentCityWeather",
    "getCityFavorites",
    "getShowFavorites",
  ]),
  methods: {
    storeCity(cityName) {
      const cityMatch = this.getCityFavorites.find((city) => {
        return city.name === cityName;
      });

      if (cityMatch) {
        alert("City already added!");
      } else if (this.getCityFavorites.length > 4) {
        alert(
          "You have reached the maximum of cities that can be added to favorite"
        );
      } else {
        this.$store.commit("addCityFavorite");
        this.$store.commit("setShowFavoritesBtn");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.current-day > * {
  opacity: 1;
  transition: all 0.5s;
}

.aniFavorites.current-day > * {
  opacity: 0;
}

.current-day {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.3rem 1rem 1.5rem 1rem;
  position: relative;
  z-index: 1;

  &__weather-icon {
    width: 8rem;
    margin-bottom: 2rem;
    margin-top: 1.2rem;
  }

  &__temperature {
    position: absolute;
    top: 46%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    width: 8rem;
    height: 8rem;
    transform: translateY(19px);
    text-align: center;
    background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);

    h1 {
      font-size: 3.8rem;
      color: white;
      transform: translate(8px, 4px);
    }
  }

  &__date {
    font-size: 2rem;
    letter-spacing: 1px;
    margin-top: 1rem;
  }

  &__box {
    text-align: center;

    &__information {
      font-size: 1rem;
      font-weight: 300;
      font-style: italic;
    }
  }

  &__city {
    z-index: 4;
    transform: translateY(8px);
    width: 100%;
    height: 41%;
    position: absolute;
    bottom: 0;

    &__img {
      background-position: center;
      background-size: cover;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &__add-to-fav {
      position: absolute;
      top: 6px;
      right: 6px;
      z-index: 5;
      background-color: #33333399;
      width: 25px;
      height: 25px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 50%;
      border: 1px solid white;
      text-transform: uppercase;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.7s;

      &:hover {
        transform: translateY(-1.5px);
      }
    }

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

  @media only screen and (max-width: 970px) {
    .current-day {
      flex-direction: row;
      padding: 0;

      &__temperature {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &__box {
        flex: 1;
      }

      &__city {
        transform: translateY(0);
        position: relative;
        height: 100%;
        flex: 1;
        clip-path: polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%);

        &__add-to-fav {
          font-size: 22px;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .current-day__temperature {
      width: 6rem;
      height: 6rem;

      h1 {
        font-size: 3rem;
        transform: translate(5px, 2px);
      }
    }
  }

  @media only screen and (max-width: 670px) {
    .current-day {
      flex-direction: column;
      margin-top: 0;

      &__weather-icon {
        width: 7rem;
      }

      &__temperature {
        top: 84%;
        width: 4rem;
        height: 4rem;

        h1 {
          font-size: 1.5rem;
          transform: translate(2px, 1px);
        }
      }

      &__box {
        margin-top: 3.5rem;
      }

      &__city {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        clip-path: none;

        &__name {
          align-items: flex-end;
          justify-content: flex-end;
          padding: 1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .current-day__city__add-to-fav {
      font-size: 22px;
      top: 88%;
      right: 88%;
      width: 35px;
      height: 35px;
    }
  }
}

span {
  position: absolute;
  top: 26;
  right: 12px;
  color: #323131;
  font-size: 45spx;
}
</style>
