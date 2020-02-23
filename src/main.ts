import Vue from 'vue'
import App from './components/app.vue'
import PortalVue from 'portal-vue';
import SquadronElement from "@/components/squadron-element/squadron-element.vue";
import SquadronPilot from "@/components/squadron-pilot/squadron-pilot.vue";
import MaterialIcon from "@/components/material-icon/material-icon.vue";
import SelectableFaction from "@/components/selectable-faction/selectable-faction.vue";
import SelectablePlane from "@/components/selectable-plane/selectable-plane.vue";
import SelectableElement from "@/components/selectable-element/selectable-element.vue";
import EditableElement from "@/components/editable-element/editable-element.vue";
import SelectablePilot from "@/components/selectable-pilot/selectable-pilot.vue";
import Button from "@/components/button/button.vue";

import './validation';

Vue.use(PortalVue);

Vue.config.productionTip = false;

Vue.component('squadron-element', SquadronElement);
Vue.component('squadron-pilot', SquadronPilot);
Vue.component('material-icon', MaterialIcon);
Vue.component('selectable-faction', SelectableFaction);
Vue.component('selectable-plane', SelectablePlane);
Vue.component('selectable-element', SelectableElement);
Vue.component('selectable-pilot', SelectablePilot);
Vue.component('editable-element', EditableElement);
Vue.component('brs-button', Button);

new Vue({
    render: h => h(App)
}).$mount('#app');
