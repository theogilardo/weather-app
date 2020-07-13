<template>
  <div class="navbar">
    <a href="#" v-show="showFavoritesBtn" @click="showFavorites" class="navbar__fav">
      <h2>Favorite Cities ({{ cityCount.length}}/5)</h2>
    </a>
    <div class="navbar__commands">
      <h2
        class="navbar__commands__metrics"
        :class="{ active: isActive }"
        @click="setCelsius"
      >Celsius</h2>
      <h2
        class="navbar__commands__metrics"
        :class="{ active: !isActive }"
        @click="setFahrenheit"
      >Fahrenheit</h2>
      <!-- <div id="google_translate_element"></div> -->

      <div id="google_translate_element">
        <div class="skiptranslate goog-te-gadget" style>
          <div id=":1.targetLanguage">
            <select class="goog-te-combo"></select>
          </div>

          <span style="white-space: nowrap;"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isActive: true,
      celsiusActive: true,
      fahrenheitActive: false
    };
  },
  methods: {
    setCelsius() {
      if (this.celsiusActive === false) {
        this.$store.commit("setCelsius");
        this.isActive = !this.isActive;
        this.celsiusActive = true;
        this.fahrenheitActive = false;
      }
    },
    setFahrenheit() {
      if (this.fahrenheitActive === false) {
        this.$store.commit("setFahrenheit");
        this.isActive = !this.isActive;
        this.fahrenheitActive = true;
        this.celsiusActive = false;
      }
    },
    showFavorites() {
      this.$store.commit("setShowFavorites");
    }
  },
  computed: {
    showFavoritesBtn() {
      return this.$store.getters.getShowFavoritesBtn;
    },
    cityCount() {
      return this.$store.getters.getCityFavorites;
    }
  }
};
</script>

<style lang="scss" scoped>
.goog-te-combo {
  color: red;
  display: none;
}

.navbar {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgb(219, 219, 219);

  &__fav {
    flex: 1;
    text-decoration: none;
    color: #333;
  }

  &__commands {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;

    & > h2:not(:last-child) {
      margin-right: 1.5rem;
    }

    &__metrics {
      cursor: pointer;
      opacity: 0.5;
    }
  }
}

.active {
  opacity: 1;
}
</style>
