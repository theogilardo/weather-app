import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityWeather: [],
    minMaxTemp: [],
    cityFavorites: [],
    showFavorites: false,
    showFavoritesBtn: false,
  },
  getters: {
    getMinMaxTemp(state) {
      return state.minMaxTemp;
    },
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
    setminMaxTemp(state, payload) {
      state.minMaxTemp = payload;
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
        const days = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];

        // Set city photos
        const responseImg = await fetch(
          `https://api.unsplash.com/search/photos?query=${city}&client_id=WlqNLtGT_QMVB2xvS8oyVo6WRZpNf3CL8VSDC5syfVk`
        );
        const dataImg = await responseImg.json();
        const cityImg = dataImg.results[0].urls.raw;

        // Set Date for all
        data.list.forEach((timestamp) => {
          const dateApiFormatted = timestamp.dt_txt.substring(0, 10);
          const dayIndex = new Date(dateApiFormatted).getDay();
          const weekDay = dayIndex - 1 >= 0 ? days[dayIndex - 1] : days[6];
          timestamp.dt_txt = weekDay;
        });

        // Set Min/Max for each day
        const listAllDays = data.list.map((day) => day.dt_txt);
        const listDay = [...new Set(listAllDays)];

        const minMaxList = {};

        for (let i = 0; i < listDay.length; i++) {
          const findCurrentDayArr = data.list.filter(
            (timestamp) => timestamp.dt_txt === listDay[i]
          );

          const minValue = findCurrentDayArr
            .map((day) => day.main.temp_min)
            .sort((a, b) => a - b)[0];

          const maxValue = findCurrentDayArr
            .map((day) => day.main.temp_max)
            .sort((a, b) => b - a)[0];

          let mixMaxDay = {};

          mixMaxDay = {
            min: Math.trunc(minValue - 273.15),
            max: Math.trunc(maxValue - 273.15),
          };

          minMaxList[`${listDay[i]}`] = mixMaxDay;
        }

        data.list.map((element, index) => {
          // Set time
          function setTime(timestamp) {
            const date = new Date(timestamp * 1000);
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            return hours + ":" + minutes.substr(-2);
          }

          const sunrise = setTime(data.city.sunrise);
          const sunset = setTime(data.city.sunset);

          if (index === 0 || index % 8 === 0) {
            const cityWeather = {
              date: element.dt_txt,
              location: {
                name: data.city.name,
                country: data.city.country,
              },
              temperature: {
                main: element.main.temp - 273.15,
                minmax: minMaxList[element.dt_txt],
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
              sunTime: {
                sunrise,
                sunset,
              },
              image: cityImg,
              icon: element.weather[0].icon,
            };

            console.log(weatherArr);
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
