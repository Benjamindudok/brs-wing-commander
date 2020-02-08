import Vue from 'vue';
import VueRouter from 'vue-router';
import Squadron from "@/views/squadron/squadron.vue";
import Squadrons from "@/views/squadrons/squadrons.vue";
import Cards from "@/views/cards/cards.vue";
import Dashboard from "@/views/dashboard/dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/squadrons',
    name: 'squadrons',
    component: Squadrons
  },
  {
    path: '/squadrons/new',
    name: 'squadronNew',
    component: Squadron
  },
  {
    path: '/squadrons/:squadronId?',
    name: 'squadron',
    component: Squadron
  },
  {
    path: '/cards',
    name: 'cards',
    component: Cards
  }
];

const router = new VueRouter({
  routes
});

export default router
