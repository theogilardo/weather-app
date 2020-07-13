import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Week from "../components/Dashboard/Week";
import Timeline from "../components/Dashboard/Timeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "week", component: Week },
      { path: "timeline", component: Timeline },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
