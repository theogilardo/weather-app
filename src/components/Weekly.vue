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
  name: "Weekly",
  components: {
    Day,
  },
};
</script>

<style lang="scss" scoped></style>
