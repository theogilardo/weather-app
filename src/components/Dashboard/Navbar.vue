<template>
  <div class="navbar">
    <a href="#" @click="showFavorites" class="navbar__fav">
      <h2>Favorite Cities</h2>
    </a>
    <div class="navbar__commands">
      <h2>°C</h2>
      <h2>°F</h2>
      <h2>Trad</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    showFavorites() {
      this.$store.commit("showFavorites");
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgb(219, 219, 219);

  &__fav {
    flex: 1;
    text-decoration: none;
    color: #333;
  }

  &__commands {
    display: flex;
    align-items: center;
    justify-content: space-around;

    & > h2:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
}
</style>
