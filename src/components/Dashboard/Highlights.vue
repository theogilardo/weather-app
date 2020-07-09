<template>
  <div class="highlights-container">
    <h1 class="highlights-container__title">Today's highlights</h1>
    <div class="highlights-container__cards">
      <highlight></highlight>
      <highlight></highlight>
      <highlight></highlight>
      <highlight></highlight>
      <highlight></highlight>
      <highlight></highlight>
    </div>
  </div>
</template>

<script>
import Highlight from "./Highlight.vue";

export default {
  name: "Highlights",
  components: {
    Highlight,
  },
};
</script>

<style lang="scss" scoped>
.highlights-container {
  margin-top: 2rem;
  // align-self: flex-start;

  &__title {
    font-size: 1.6rem;
    padding: 0 0 1rem 0.2rem;
  }

  &__cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px;
    justify-content: center;
    align-items: center;
  }
}
</style>
