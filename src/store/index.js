import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityWeather: [],
    cityFavorites: [],
    showFavorites: false,
    showFavoritesBtn: false,
  },
  getters: {
    getCityWeather(state) {
      return state.cityWeather;
    },
    getShowFavorites(state) {
      return state.showFavorites;
    },
    getShowFavoritesBtn(state) {
      return state.showFavoritesBtn;
    },
    getCityFavorites(state) {
      return state.cityFavorites;
    },
  },
  mutations: {
    setCelsius(state) {
      state.cityWeather.forEach(
        (el) => (el.temperature.main = ((el.temperature.main - 32) * 5) / 9)
      );
    },
    setFahrenheit(state) {
      state.cityWeather.forEach(
        (el) => (el.temperature.main = (el.temperature.main * 9) / 5 + 32)
      );
    },
    refreshCities(state) {
      state.cityFavorites = JSON.parse(localStorage.getItem("cityFavorites"));
    },
    setCityWeather(state, payload) {
      state.cityWeather = payload;
    },
    addCityFavorite(state) {
      const newFavCity = {
        name: state.cityWeather[0].location.name,
        country: state.cityWeather[0].location.country,
        img: state.cityWeather[0].image,
      };

      state.cityFavorites.push(newFavCity);

      localStorage.setItem(
        "cityFavorites",
        JSON.stringify(state.cityFavorites)
      );
    },
    setShowFavorites(state) {
      state.showFavorites = !state.showFavorites;
    },
    setShowFavoritesBtn(state) {
      if (state.cityFavorites.length >= 1) {
        state.showFavoritesBtn = true;
      } else if (localStorage.getItem("cityFavorites").length !== 2) {
        state.showFavoritesBtn = true;
      } else {
        state.showFavoritesBtn = false;
      }
    },
    removeCityFavorite(state, city) {
      state.cityFavorites = state.cityFavorites.filter(
        (el) => el.name !== city
      );

      localStorage.setItem(
        "cityFavorites",
        JSON.stringify(state.cityFavorites)
      );

      if (state.cityFavorites.length === 0) {
        state.showFavoritesBtn = false;
        state.showFavorites = false;
      }
    },
  },
  actions: {
    async fetchCityWeather({ commit }, city) {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7e918318a291df997bd192ca77406428`
        );
        const data = await response.json();

        const weatherArr = [];

        const responseImg = await fetch(
          `https://api.unsplash.com/search/photos?query=${city}&client_id=WlqNLtGT_QMVB2xvS8oyVo6WRZpNf3CL8VSDC5syfVk`
        );
        const dataImg = await responseImg.json();
        const cityImg = dataImg.results[0].urls.raw;

        data.list.map((element, index) => {
          const dateApiFormatted = element.dt_txt.substring(0, 10);
          const dayIndex = new Date(dateApiFormatted).getDay();
          const days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ];

          const weekDay = dayIndex - 1 >= 0 ? days[dayIndex - 1] : days[6];

          if (index === 0 || index % 8 === 0) {
            const cityWeather = {
              date: weekDay,
              location: {
                name: data.city.name,
                country: data.city.country,
              },
              temperature: {
                main: element.main.temp - 273.15,
                min: element.main.temp_min - 273.15,
                max: element.main.temp_max - 273.15,
              },
              highlight: {
                main: element.weather[0].main,
                description: element.weather[0].description,
                id: element.weather[0].id,
                pressure: element.main.pressure,
                humidity: element.main.humidity,
                cloudCoverage: element.clouds.all,
                windSpeed: element.wind.speed,
              },
              image: cityImg,
              icon: `http://openweathermap.org/img/w/${element.weather[0].icon}.png`,
            };

            weatherArr.push(cityWeather);
          }
        });

        commit("setCityWeather", weatherArr);
      } catch (error) {
        alert("Please enter a valid city.");
      }
    },
  },
  modules: {},
});
