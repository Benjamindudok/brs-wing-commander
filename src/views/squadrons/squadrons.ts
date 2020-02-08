import {Component, Vue} from 'vue-property-decorator';
import CreateSquadron from "@/views/squadrons/_create-squadron/create-squadron.vue";

@Component({
    components: {
        CreateSquadron
    }
})
export default class Squadrons extends Vue {
    showSquadronOverlay: boolean = false;
}