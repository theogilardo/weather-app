<template>
  <div>
    <form class="search" :class="{aniFavorites: getShowFavorites}">
      <button @click.prevent="fetchCityWeather()" class="search__btn">Search</button>
      <input
        v-model="searchQuery"
        class="search__input"
        type="text"
        placeholder="Type city here..."
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    fetchCityWeather() {
      if (this.searchQuery === "") {
        alert("Please type a city.");
      } else {
        this.$store.dispatch("fetchCityWeather", this.searchQuery);
        this.searchQuery = "";
      }
    },
  },
  computed: mapGetters(["getShowFavorites"]),
};
</script>

<style lang="scss" scoped>
.aniFavorites.search {
  opacity: 0;
}

.search {
  margin: 1.5rem 1rem;
  position: relative;
  z-index: 50;
  width: 100%;
  opacity: 1;
  transition: all 0.5s;

  &__input {
    padding: 0.5rem 2.5rem;
    height: 100%;
    border: none;
    border-top-left-radius: 10px;

    &:focus {
      outline: none;
    }
  }

  &__btn {
    height: 100%;
    position: absolute;
    padding: 0.5rem 0.7rem;
    right: 10%;
    border: none;
    color: white;
    font-weight: 700;
    background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);

    &:focus {
      outline: none;
    }
  }
}

// Media queries
@media only screen and (max-width: 970px) {
  .search {
    &__input {
      border-radius: 10px;
    }

    &__btn {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  div {
    position: absolute;
  }
}
</style>
