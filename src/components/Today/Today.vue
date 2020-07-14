<template>
  <div class="current-day" v-if="cityWeather" :class="{aniFavorites: showFavorites}">
    <div class="current-day__box">
      <h2 class="current-day__date">{{ cityWeather.date }}</h2>
      <!-- <p class="current-day__box__information">{{ cityWeather.highlight.main }}</p> -->
    </div>
    <p class="current-day__box__information">"{{ cityWeather.highlight.description }}"</p>
    <img
      class="current-day__weather-icon"
      :src="require(`../../assets/${cityWeather.icon}.png`)"
      alt="Weather icon"
    />
    <div class="current-day__temperature">
      <h1>
        {{ Math.trunc(cityWeather.temperature.main) }}°
        <!-- <span>°</span> -->
      </h1>
    </div>
    <div class="current-day__city">
      <img class="current-day__city__img" :src="cityWeather.image" alt="Photo of city" />
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
      } else if (this.favoriteList.length > 4) {
        alert(
          "You have reached the maximum of cities that can be added to favorite"
        );
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
  padding: 0.3rem 1rem 1.5rem 1rem;

  &__weather-icon {
    width: 8rem;
    margin-bottom: 1rem;
    margin-top: 1.2rem;
  }

  &__temperature {
    position: relative;
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
      color: #323131;
      // transform: translateX(4px);
      transform: translate(8px, 4px);
    }
  }

  &__date {
    font-size: 2rem;
    letter-spacing: 1px;
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
  }

  &__box {
    // transform: translateY(1.5rem);
    text-align: center;

    &__information {
      font-size: 1rem;
      font-weight: 300;
      font-style: italic;
    }
  }

  &__city {
    position: relative;
    z-index: 4;
    margin-top: auto;
    transform: translateY(8px);
    width: 95%;
    // margin: 3rem 0;
    border-radius: 10px;
    overflow: hidden;
    height: 8rem;

    &__img {
      border-radius: 10px;
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

span {
  // position: absolute;
  // top: 0;
  // right: -20px;
  position: absolute;
  top: 26;
  right: 12px;
  color: #323131;
  font-size: 45spx;
}
</style>
