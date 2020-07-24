<template>
  <div :class="{aniFavorites: getShowFavorites}" class="favorites">
    <button v-for="favorite in getCityFavorites" :key="favorite.id" class="favorites__city">
      <img class="favorites__img" :src="`${favorite.img}`" alt="City photo" />
      <p @click="deleteCity(favorite.name)" class="favorites__delete">x</p>
      <h2
        class="favorites__text"
        @click="chooseCity(favorite.name)"
      >{{ favorite.name }} ({{ favorite.country }})</h2>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Favorites",
  mounted() {
    if (localStorage.getItem("cityFavorites")) {
      this.$store.commit("setShowFavoritesBtn");
      this.$store.commit("refreshCities");
    }
  },
  computed: mapGetters(["getShowFavorites", "getCityFavorites"]),
  methods: {
    deleteCity(cityName) {
      return this.$store.commit("removeCityFavorite", cityName);
    },
    chooseCity(cityName) {
      this.$store.commit("setShowFavorites");
      return this.$store.dispatch("fetchCityWeather", cityName);
    },
  },
};
</script>

<style lang="scss" scoped>
.aniFavorites.favorites {
  opacity: 1;
  transform: translateX(0);
}

.favorites {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  color: black;
  background-color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateX(-300px);
  opacity: 0;
  transition: transform 0.4s linear, opacity 0.4s linear;

  &__img {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__city {
    position: relative;
    height: 6rem;
    width: 70%;
    margin: 0.5rem;
    font-weight: 700;
    -webkit-background-clip: text;
    background-clip: text;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.2);
    transition: all 0.4s;

    &:hover {
      transform: translateY(-2px) scale(1.05);
    }

    &:focus {
      outline: none;
    }
  }

  &__text {
    cursor: pointer;
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #33333344;
  }

  &__delete {
    position: absolute;
    z-index: 50;
    top: 5px;
    right: 7px;
    font-size: 13px;
    opacity: 0.5;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  // Media queries
  @media only screen and (max-width: 970px) {
    &__city {
      width: 50%;
      height: 4.5rem;
    }

    &__delete {
      opacity: 1;
      top: 7px;
      right: 8px;
      border-radius: 5px;
      color: white;
      background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);
      padding: 0.4rem 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 670px) {
    &__city {
      width: 65%;
      height: 3.5rem;
    }

    &__delete {
      padding: 0.3rem 0.5rem;
    }
  }
}
</style>