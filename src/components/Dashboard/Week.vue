<template>
  <div class="week-container">
    <h1 class="week-container__title">Week</h1>
    <div class="week-container__cards">
      <day></day>
      <day></day>
      <day></day>
      <day></day>
      <day></day>
    </div>
  </div>
</template>

<script>
import Day from "./Day.vue";

export default {
  name: "Week",
  components: {
    Day,
  },
};
</script>

<style lang="scss" scoped>
.week-container {
  align-self: flex-start;
  width: 100%;

  &__title {
    font-size: 1.6rem;
    padding: 0 0 1rem 0.2rem;
  }

  &__cards {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
