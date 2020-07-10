<template>
  <div>
    <div class="container">
      <section class="current-day">
        <search></search>
        <today></today>
        <favorites></favorites>
      </section>
      <section class="dashboard">
        <Navbar></Navbar>
        <Week></Week>
        <highlights></highlights>
      </section>
    </div>
  </div>
</template>

<script>
import Search from "./Today/Search.vue";
import Today from "./Today/Today.vue";
import Favorites from "./Today/Favorites.vue";
import Navbar from "./Dashboard/Navbar.vue";
import Week from "./Dashboard/Week.vue";
import Highlights from "./Dashboard/Highlights.vue";

export default {
  name: "Home",
  components: {
    Search,
    Today,
    Navbar,
    Week,
    Highlights,
    Favorites
  }
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
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  position: relative;
}

.current-day {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #323131;
  color: white;
  flex: 1;
}

.dashboard {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem;
  background-color: #f6f6f8;
  flex: 2.5;
}
</style>
