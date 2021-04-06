import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Hotjar from "vue-hotjar";

Vue.config.productionTip = false;

Vue.filter("trunc", function(value) {
  return Math.trunc(value);
});

Vue.use(Hotjar, {
  id: "2335217", // Hotjar Site ID
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
