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
        // `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7e918318a291df997bd192ca77406428`
        `http://api.openweathermap.org/data/2.5/forecast?q=london&appid=7e918318a291df997bd192ca77406428`
      );
      const data = await response.json();

      const cityWeather = {
        description: data.list[0].weather[0].description,
        weatherState: data.list[0].weather[0].main,
        id: data.list[0].weather[0].id,
        temperature: data.list[0].main.temp,
        tempMin: data.list[0].main.temp_min,
        tempMax: data.list[0].main.temp_max,
        pressure: data.list[0].main.pressure,
        humidity: data.list[0].main.humidity,
        date: data.list[0].dt_txt,
      };

      console.log(cityWeather);

      commit("setCityWeather", cityWeather);
    },
  },
  modules: {},
});
