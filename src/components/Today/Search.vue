<template>
  <div>
    <div class="search">
      <a href="#">
        <img
          src="../../assets/search.svg"
          class="search__icon"
          alt="Search icon"
        />
      </a>
      <input
        class="search__input"
        type="text"
        placeholder="Type city here..."
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="scss" scoped>
.search {
  padding: 1rem;
  position: relative;
  width: 100%;

  &__input {
    padding: 0.5rem;
    border: none;
    border-radius: 10px;

    &:focus {
      outline: none;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 15%;
    transform: translateY(-50%);
    width: 12px;
  }
}
</style>
