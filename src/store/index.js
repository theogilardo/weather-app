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
    getTimeline(state) {
      // Get each time period of the current day
      const currentDay = state.cityWeather.map((el) => el.date)[0];
      const currentFilter = state.cityWeather.filter(
        (el) => el.date === currentDay
      );
      return currentFilter;
    },
    getWeekWeather(state) {
      const week = [];
      // Get each day of the week at a specific time (there are 8 time periods a day for a total of 5 days)
      state.cityWeather.map((day, index) => {
        if (index === 0 || index % 8 === 0) {
          week.push(day);
        }
      });

      return week;
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
      state.cityWeather.forEach((el, index) => {
        el.temperature.main = ((el.temperature.main - 32) * 5) / 9;
        if (index === 0 || index % 8 === 0) {
          el.temperature.minmax.min =
            ((el.temperature.minmax.min - 32) * 5) / 9;
          el.temperature.minmax.max =
            ((el.temperature.minmax.max - 32) * 5) / 9;
        }
      });
    },
    setFahrenheit(state) {
      state.cityWeather.forEach((el, index) => {
        el.temperature.main = (el.temperature.main * 9) / 5 + 32;
        if (index === 0 || index % 8 === 0) {
          el.temperature.minmax.min = (el.temperature.minmax.min * 9) / 5 + 32;
          el.temperature.minmax.max = (el.temperature.minmax.max * 9) / 5 + 32;
        }
      });
    },
    refreshCities(state) {
      state.cityFavorites = JSON.parse(localStorage.getItem("cityFavorites"));
    },
    setCityWeather(state, payload) {
      localStorage.setItem("activeCity", JSON.stringify(payload));
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

        // Fetch city photos from Unsplash API
        const responseImg = await fetch(
          `https://api.unsplash.com/search/photos?query=${city}&client_id=WlqNLtGT_QMVB2xvS8oyVo6WRZpNf3CL8VSDC5syfVk`
        );
        const dataImg = await responseImg.json();
        const cityImg = dataImg.results[0].urls.raw;

        // Format Date from API "2020-07-11 21:00:00"
        data.list.forEach((timestamp) => {
          const dateApiFormatted = timestamp.dt_txt.substring(0, 10);
          const timeApiFormatted = timestamp.dt_txt.substring(11, 16);
          const dayIndex = new Date(dateApiFormatted).getDay();
          const weekDay = dayIndex - 1 >= 0 ? days[dayIndex - 1] : days[6];

          // "2020-07-11 21:00:00" -> "Saturday"
          timestamp.dt_txt = weekDay;

          // "2020-07-12 21:00:00" -> "21:00"
          timestamp.time = timeApiFormatted;
        });

        // Set Min/Max for each day
        // Retrieve all days available in new array -> ["Monday", "Monday", "Tuesday"..]
        const listAllDays = data.list.map((day) => day.dt_txt);

        // Format array for unique days
        const listDay = [...new Set(listAllDays)];

        // Set new object where min/max will be stored
        const minMaxList = {};

        // Loop for each day available in listDay array
        for (let i = 0; i < listDay.length; i++) {
          // Pick one day available, collect all its timeperiods (12:00, 15:00, 18:00 ..)
          const findCurrentDayArr = data.list.filter(
            (timestamp) => timestamp.dt_txt === listDay[i]
          );

          // Retrieve the min values from the timeperiods of the day and find the lowest number
          const minValue = findCurrentDayArr
            .map((day) => day.main.temp_min)
            .sort((a, b) => a - b)[0];

          // Retrieve the max values from the timeperiods of the day and find the biggest number
          const maxValue = findCurrentDayArr
            .map((day) => day.main.temp_max)
            .sort((a, b) => b - a)[0];

          let minMaxDay = {};

          // Convert from Kelvin to °C and store values in an object
          minMaxDay = {
            min: minValue - 273.15,
            max: maxValue - 273.15,
          };

          // Store the min/max values for each day in the minMaxList object
          minMaxList[`${listDay[i]}`] = minMaxDay;
        }

        data.list.map((element) => {
          // Set Sunrise and Sunset time
          function setTime(timestamp) {
            const date = new Date(timestamp * 1000);
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            return hours + ":" + minutes.substr(-2);
          }

          // Store all the data formated in a new object
          const cityWeather = {
            date: element.dt_txt,
            time: element.time,
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
              sunrise: setTime(data.city.sunrise),
              sunset: setTime(data.city.sunset),
            },
            image: cityImg,
            icon: element.weather[0].icon,
          };

          // Store cityWeather object in weather array before commiting it to the state
          weatherArr.push(cityWeather);
        });

        commit("setCityWeather", weatherArr);
      } catch (error) {
        alert("Please enter a valid city.");
      }
    },
  },
  modules: {},
});
