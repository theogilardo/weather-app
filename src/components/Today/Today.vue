<template>
  <div class="current-day" v-if="cityWeather" :class="{aniFavorites: showFavorites}">
    <img class="current-day__weather-icon" :src="`${cityWeather.icon}`" alt="Weather icon" />
    <h1 class="current-day__temperature">{{ Math.trunc(cityWeather.temperature.main) }} °C</h1>
    <h2 class="current-day__date">{{ cityWeather.date }}</h2>
    <p class="current-day__information">{{ cityWeather.highlight.main }}</p>
    <p class="current-day__information">{{ cityWeather.highlight.description }}</p>
    <div class="current-day__city">
      <img class="current-day__city__img" :src="cityWeather.image" alt="Photo of city" />
      <!-- <img class="current-day__city__img" src="../../assets/nyc.jpg" alt="Photo of city" /> -->
      <a @click="storeCity(cityWeather.location.name)">
        <p class="current-day__city__add-to-fav">+</p>
      </a>
      <h2
        class="current-day__city__name"
      >{{ cityWeather.location.name }} ({{ cityWeather.location.country }})</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Today",
  methods: {
    storeCity(cityName) {
      const cityMatch = this.favoriteList.find(city => {
        return city.name === cityName;
      });

      if (cityMatch) {
        alert("City already added!");
      } else {
        this.$store.commit("addCityFavorite");
        this.$store.commit("setShowFavoritesBtn");
      }
    }
  },
  computed: {
    cityWeather() {
      return this.$store.getters.getCityWeather[0];
    },
    favoriteList() {
      return this.$store.getters.getCityFavorites;
    },
    showFavorites() {
      return this.$store.getters.getShowFavorites;
    }
  }
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
    // background-image: url(../../assets/nyc.jpg);
    width: 95%;
    margin: 3rem 0;
    border-radius: 10px;
    overflow: hidden;
    height: 8rem;

    &__img {
      border-radius: 10px;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
    }

    &__add-to-fav {
      position: absolute;
      top: 5px;
      right: 5px;
      z-index: 5;
      background-color: #33333399;
      padding: 0.1rem 0.4rem;
      font-size: 14px;
      font-weight: 700;
      border-radius: 50%;
      border: 1px solid white;
      text-transform: uppercase;
      cursor: pointer;
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
}
</style>
