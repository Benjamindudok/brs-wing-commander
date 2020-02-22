import Vue from 'vue';
import VueRouter from 'vue-router';
import Squadron from "@/views/squadron/squadron.vue";
import Squadrons from "@/views/squadrons/squadrons.vue";
import Cards from "@/views/cards/cards.vue";
import CreateSquadron from "@/views/squadrons/create-squadron/create-squadron.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/squadrons',
    name: 'squadrons',
    component: Squadrons
  },
  {
    path: '/squadrons/new',
    name: 'squadronNew',
    component: CreateSquadron
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
