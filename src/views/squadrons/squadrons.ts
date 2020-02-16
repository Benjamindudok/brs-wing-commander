import {Component, Vue} from 'vue-property-decorator';
import CreateSquadron from "@/views/squadrons/_create-squadron/create-squadron.vue";
import Squadron from "@/models/squadron";
import {squadronModule} from "@/store/squadron-module";
import Faction from "@/models/faction";

@Component({
    components: {
        CreateSquadron
    }
})
export default class Squadrons extends Vue {
    showSquadronOverlay: boolean = false;

    get squadrons(): Squadron[]
    {
        if (this.$route.query.faction)
        {
            return squadronModule.squadrons.filter((s) => s.faction === this.$route.query.faction)
        }

        return squadronModule.squadrons;
    }

    get factions(): Array<{ id: Faction, name: string }> {
        return [
            { id: Faction.GB, name: 'Great Britain' },
            { id: Faction.DE, name: 'Germany' },
            { id: Faction.JP, name: 'Japan' },
            { id: Faction.SV, name: 'Soviet Union' },
            { id: Faction.US, name: 'United States of America' }
        ];
    }
}