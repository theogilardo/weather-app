<template>
  <div>
    <div class="container">
      <section class="current-day">
        <search> </search>
        <today> </today>
      </section>
      <section class="dashboard">
        <Week> </Week>
        <highlights> </highlights>
      </section>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
import Today from "./Today.vue";
import Week from "./Week.vue";
import Highlights from "./Highlights.vue";

export default {
  name: "Home",
  components: {
    Search,
    Today,
    Week,
    Highlights,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  background-color: #eee;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  position: relative;
}

.current-day {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid black;
  flex: 1;
}

.dashboard {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  flex: 2.5;
}
</style>
