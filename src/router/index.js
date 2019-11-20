import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Inicio from "../views/Inicio.vue"
import EstadoAlumno from "../views/EstadoAlumno.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Inicio",
    name: "Inicio",
    component: Inicio
  },
  {
    path: "/EstadoAlumno",
    name: "EstadoAlumno",
    component: EstadoAlumno
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
