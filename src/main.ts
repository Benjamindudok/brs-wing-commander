import Vue from 'vue'
import App from './components/app.vue'
import PortalVue from 'portal-vue';
import SquadronElement from "@/components/squadron-element/squadron-element.vue";
import SquadronPilot from "@/components/squadron-pilot/squadron-pilot.vue";
import MaterialIcon from "@/components/material-icon/material-icon.vue";
import SelectableElement from "@/components/selectable-element/selectable-element.vue";
import EditableElement from "@/components/editable-element/editable-element.vue";
import Button from "@/components/button/button.vue";
import FactionSelector from "@/components/faction-selector/faction-selector.vue";
import AircraftSelector from "@/components/aircraft-selector/aircraft-selector.vue";
import PilotSelector from "@/components/pilot-selector/pilot-selector.vue";
import SelectorContainer from "@/components/selector-container/selector-container.vue";
import SelectorCard from "@/components/selector-card/selector-card.vue";
import SquadronMeta from "@/components/squadron-meta/squadron-meta.vue";
import factionName from "@/utils/filters/faction-name";

import './validation';

Vue.use(PortalVue);

Vue.config.productionTip = false;

Vue.component('squadron-element', SquadronElement);
Vue.component('squadron-pilot', SquadronPilot);
Vue.component('material-icon', MaterialIcon);
Vue.component('selectable-element', SelectableElement);
Vue.component('editable-element', EditableElement);
Vue.component('brs-button', Button);
Vue.component('faction-selector', FactionSelector);
Vue.component('aircraft-selector', AircraftSelector);
Vue.component('pilot-selector', PilotSelector);
Vue.component('selector-container', SelectorContainer);
Vue.component('selector-card', SelectorCard);
Vue.component('squadron-meta', SquadronMeta);

Vue.filter('factionName', factionName);

new Vue({
    render: h => h(App)
}).$mount('#app');
