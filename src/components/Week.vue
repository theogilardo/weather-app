<template>
  <div>
    <day></day>
    <day></day>
    <day></day>
    <day></day>
    <day></day>
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
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
