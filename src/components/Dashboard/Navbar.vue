<template>
  <div class="navbar">
    <div>
      <a class="navbar__fav" href="#" v-show="showFavoritesBtn" @click="showFavorites">
        <h2 :class="{ remove: tradActive }">My Cities ({{ cityCount.length}}/5)</h2>
      </a>
    </div>
    <div class="navbar__commands">
      <h2
        class="navbar__commands__metrics"
        :class="{ active: isActive, remove: tradActive  }"
        @click="setCelsius"
      >Celsius</h2>
      <h2
        class="navbar__commands__metrics"
        :class="{ active: !isActive, remove: tradActive }"
        @click="setFahrenheit"
      >Fahrenheit</h2>
      <h2 class="translate" @click="tradActive = !tradActive">Translate</h2>
    </div>
    <div :class="{showtrad: tradActive}" id="google_translate_element"></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      tradActive: false,
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
@media only screen and (max-width: 670px) {
  .remove {
    display: none;
  }
}

#google_translate_element {
  opacity: 0;
  width: 0%;
  transform: translateX(100px);
  text-align: right;
  transition: opacity 0.5s linear, width 0.5s linear, transform 0.5s linear;
}

#google_translate_element.showtrad {
  opacity: 1;
  width: 25%;
  transform: translateX(0);
}

@media only screen and (max-width: 670px) {
  #google_translate_element.showtrad {
    width: 50%;
    opacity: 0.6;
    margin-left: 2rem;
  }
}

.translate {
  background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);
  color: white;
  padding: 0.5rem;
  border-radius: 10px;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-1.3px);
  }
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
    position: relative;
  }

  &__commands {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    transition: all 1.5s;

    & > h2:not(:last-child) {
      margin-right: 1.5rem;
    }

    &__metrics {
      cursor: pointer;
      opacity: 0.5;
    }
  }
}

@media only screen and (max-width: 500px) {
  .navbar {
    font-size: 9px;
  }
}

@media only screen and (max-width: 440px) {
  .navbar {
    font-size: 7px;
  }
}

@media only screen and (max-width: 320px) {
  .navbar {
    font-size: 5px;
  }
}

@media only screen and (max-width: 930px) {
  .navbar {
    margin-top: 1.5rem;
  }
}

.active {
  opacity: 1;
}
</style>
