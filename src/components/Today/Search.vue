<template>
  <div>
    <form class="search">
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
export default {
  name: "Search",
  data() {
    return {
      searchQuery: ""
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
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  margin: 1.5rem 1rem;
  position: relative;
  width: 100%;

  &__input {
    padding: 0.5rem 2.5rem;
    height: 100%;
    border: none;
    // border-radius: 10px;
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
    // border-top-right-radius: 10px;
    // border-bottom-right-radius: 10px;

    &:focus {
      outline: none;
    }
  }
}
</style>
