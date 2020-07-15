import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Week from "../components/Dashboard/Week";
import Timeline from "../components/Dashboard/Timeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/timeline",
    name: "Home",
    component: Home,
    children: [
      { path: "/timeline", component: Timeline },
      { path: "week", component: Week },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
