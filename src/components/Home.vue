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
          <a @click="showLink = !showLink">
            <router-link
              :class="{ LinkTimeline: !showLink }"
              class="command__link command__link--timeline"
              to="/timeline"
            >Timeline</router-link>
          </a>
          <a @click="showLink = !showLink">
            <router-link
              :class="{ LinkWeek: showLink }"
              class="command__link command__link--week"
              to="/week"
            >Week</router-link>
          </a>
        </div>
        <!-- <transition name="slide"> -->
        <router-view></router-view>
        <!-- </transition> -->
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
  },
  data() {
    return {
      showLink: false
    };
  }
};
</script>

<style lang="scss" scoped>
.command__link--week.LinkWeek {
  opacity: 1;
}

.command__link--timeline.LinkTimeline {
  opacity: 1;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  // opacity: 1;s
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.command {
  display: flex;
  align-items: center;

  &__link {
    text-decoration: none;
    font-size: 1.6rem;
    margin: 0 0 1rem 0.2rem;
    font-weight: 700;
    background-image: linear-gradient(#8360c3, #2ebf91);
    background-clip: text;
    color: transparent;
    letter-spacing: 2px;

    &--timeline {
      margin-right: 1rem;
      opacity: 0.4;
    }

    &--week {
      opacity: 0.4;
    }
  }
}

.container {
  width: 90vw;
  height: 92vh;
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
  padding: 0.6rem 2rem 1rem 2rem;
  background-color: #f3f3f3;
  flex: 2.5;
}
</style>
