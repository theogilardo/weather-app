<template>
  <div>
    <form class="search">
      <button @click="fetchweather()" class="search__btn">
        Search
      </button>
      <input
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
  mounted() {
    this.$store.dispatch("fetchCityWeather");
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding: 1.5rem 0;
  position: relative;
  width: 100%;

  &__input {
    padding: 0.5rem 3.5rem;
    border: none;
    border-radius: 10px;

    &:focus {
      outline: none;
    }
  }

  &__btn {
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
    background-color: #333;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 0.3rem 1rem;

    &:focus {
      outline: none;
    }
  }
}
</style>
