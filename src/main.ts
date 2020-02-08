import Vue from 'vue'
import App from './components/app.vue'
import router from './views'
import store from './store'
import SquadronElement from "@/components/squadron-element/squadron-element.vue";
import SquadronPilot from "@/components/squadron-pilot/squadron-pilot.vue";
import Tabbar from "@/components/tabbar/tabbar.vue";
import Navbar from "@/components/navbar/navbar.vue";
import MaterialIcon from "@/components/material-icon/material-icon.vue";
import CardListItem from "@/components/card-list-item/card-list-item.vue";

Vue.config.productionTip = false;

Vue.component('squadron-element', SquadronElement);
Vue.component('squadron-pilot', SquadronPilot);
Vue.component('nav-bar', Navbar);
Vue.component('tab-bar', Tabbar);
Vue.component('material-icon', MaterialIcon);
Vue.component('card-list-item', CardListItem);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
