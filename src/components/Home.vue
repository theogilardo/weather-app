<template>
  <div>
    <div v-if="!isLoading" class="wrapper">
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
                >Timeline</router-link
              >
            </a>
            <a @click="showLink = !showLink">
              <router-link
                :class="{ LinkWeek: showLink }"
                class="command__link command__link--week"
                to="/week"
                >Week</router-link
              >
            </a>
          </div>
          <router-view></router-view>
          <highlights></highlights>
        </section>
      </div>
    </div>
    <div v-else class="wrapper">
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
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
    Favorites,
  },
  mounted() {
    this.$store.commit("setInit");
    if (localStorage.getItem("activeCity")) {
      const city = JSON.parse(localStorage.getItem("activeCity"))[0].location
        .name;
      this.$store.dispatch("fetchCityWeather", city);
    } else {
      this.$store.dispatch("fetchCityWeather", "paris");
    }
  },
  data() {
    return {
      showLink: false,
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.command__link--week.LinkWeek {
  opacity: 1;
}

.command__link--timeline.LinkTimeline {
  opacity: 1;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.container {
  width: 95%;
  max-width: 1100px;
  height: 90%;
  display: flex;
  background-color: #eee;
  justify-content: center;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  position: relative;
}

@media only screen and (max-width: 970px) {
  .container {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@media only screen and (max-width: 970px) {
  .container {
    flex-direction: column;
  }
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

@media only screen and (max-width: 970px) {
  .current-day {
    height: 25rem;
  }
}

.dashboard {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0.6rem 2rem 1rem 2rem;
  background-color: #f3f3f3;
  flex: 2.5;
}

@media only screen and (max-width: 450px) {
  .dashboard {
    padding: 0.6rem 2rem 2rem 2rem;
  }
}

.command {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  &__link {
    text-decoration: none;
    font-size: 1.7rem;
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

  @media only screen and (max-width: 450px) {
    &__link {
      font-size: 1.5rem;
    }
  }
}

@media only screen and (max-width: 450px) {
  .command {
    justify-content: center;
    margin-bottom: 1.5rem;
  }
}

// Loading spinner

.sk-chase {
  width: 60px;
  height: 60px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot:before {
  content: "";
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-chase-dot-before 2s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2):before {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
