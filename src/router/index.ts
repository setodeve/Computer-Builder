import {createRouter, createWebHistory} from "vue-router";
import store  from "../store";
import DefaultLayout from "../components/DefaultLayout.vue" ;

const routes = [
  {
    path: '/',
    component: DefaultLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;