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
        <div class="command">
          <router-link class="command__link" to="/week">Timeline</router-link>
          <router-link class="command__link" to="/timeline">Week</router-link>
        </div>
        <router-view></router-view>
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
import Highlights from "./Dashboard/Highlights.vue";

export default {
  name: "Home",
  components: {
    Search,
    Today,
    Navbar,
    Highlights,
    Favorites
  }
};
</script>

<style lang="scss" scoped>
.command {
  display: flex;
  align-items: center;

  &__link {
    text-decoration: none;
    font-size: 1.6rem;
    padding: 0 0 1rem 0.2rem;
    font-weight: 700;
    background-image: linear-gradient(#8360c3, #2ebf91);
    background-clip: text;
    color: transparent;
    letter-spacing: 2px;
  }
}

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
  padding: 1rem 2rem;
  background-color: #f3f3f3;
  flex: 2.5;
}
</style>
