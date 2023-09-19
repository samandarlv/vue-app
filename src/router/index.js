import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CarsTableView from "../views/CarsTableView.vue";
import OneCarView from "../views/OneCarView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/cars",
    name: "cars",
    component: CarsTableView,
  },
  {
    path: "/car/:id",
    name: "car",
    component: OneCarView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
