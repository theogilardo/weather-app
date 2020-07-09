import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityWeather: [],
  },
  getters: {
    cityWeather(state) {
      return state.cityWeather;
    },
  },
  mutations: {
    setCityWeather(state, payload) {
      state.cityWeather = payload;
    },
  },
  actions: {
    async fetchCityWeather({ commit }) {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=sydney&appid=7e918318a291df997bd192ca77406428`
      );
      const data = await response.json();

      function convertToCelcius(kelvin) {
        return Math.round(kelvin - 273.15);
      }

      const dateFormatted = cityWeather.date.substring(0, 10);
      const day = new Date(dateFormatted).getDay();

      const cityWeather = {
        // date: data.list[0].dt_txt,
        date: day,
        location: {
          name: data.city.name,
          country: data.city.country,
        },

        temperature: {
          // main: data.list[0].main.temp,
          // min: data.list[0].main.temp_min,
          // max: data.list[0].main.temp_max,
          main: convertToCelcius(data.list[0].main.temp),
          min: convertToCelcius(data.list[0].main.temp_min),
          max: convertToCelcius(data.list[0].main.temp_max),
        },

        highlight: {
          main: data.list[0].weather[0].main,
          description: data.list[0].weather[0].description,
          id: data.list[0].weather[0].id,
          pressure: data.list[0].main.pressure,
          humidity: data.list[0].main.humidity,
          cloudCoverage: data.list[0].clouds.all,
          windSpeed: data.list[0].wind.speed,
        },
        icon: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`,
      };

      commit("setCityWeather", cityWeather);
    },
  },
  modules: {},
});
