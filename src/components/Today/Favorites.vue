<template>
  <div v-if="showFavorites" class="favorites">
    <button
      @click="chooseCity(favorite.name)"
      v-for="favorite in cityFavorites"
      :key="favorite.id"
      class="favorites__city"
    >
      <p class="favorites__delete">x</p>
      <h2>{{ favorite.name }} ({{ favorite.country }})</h2>
    </button>
  </div>
</template>

<script>
export default {
  name: "Favorites",
  mounted() {
    if (localStorage.getItem("cityFavorites")) {
      this.$store.commit("setShowFavoritesBtn");
      this.$store.commit("refreshCities");
    }
  },
  computed: {
    showFavorites() {
      return this.$store.getters.getShowFavorites;
    },
    cityFavorites() {
      return this.$store.getters.getCityFavorites;
    }
  },
  methods: {
    chooseCity(cityName) {
      this.$store.commit("setShowFavorites");
      return this.$store.dispatch("fetchCityWeather", cityName);
    }
  }
};
</script>

<style lang="scss" scoped>
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

  &__city {
    position: relative;
    width: 70%;
    margin: 0.5rem;
    border-radius: 4px;
    padding: 1rem 0;
    font-weight: 700;
    background-image: linear-gradient(
      to right bottom,
      rgba(131, 96, 195, 0.8),
      rgba(46, 191, 145, 0.8)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-transform: uppercase;
    border: 4px solid transparent;
    -o-border-image: linear-gradient(
      to right bottom,
      rgba(131, 96, 195, 0.8),
      rgba(46, 191, 145, 0.8)
    );
    border-image: linear-gradient(
      to right bottom,
      rgba(131, 96, 195, 0.8),
      rgba(46, 191, 145, 0.8)
    );
    border-image-slice: 1;
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.2);
    transition: all 0.4s;

    &:hover {
      transform: translateY(-2px) scale(1.05);
    }
  }

  &__delete {
    position: absolute;
    top: 5px;
    right: 7px;
    // background-color: #33333399;
    // padding: 0.1rem 0.4rem;
    font-size: 14px;
    // font-weight: 700;
    border-radius: 50%;
    opacity: 0.7;
    // border: 1px solid white;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.7s;
  }
}
</style>