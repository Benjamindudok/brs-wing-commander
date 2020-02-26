import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Squadron from "../../models/squadron";
import Pilot from "../../models/pilot";
import pilots from "../../data/pilots";
import Faction from "@/models/faction";

@Component

export default class PilotSelector extends Vue {
    selectedPilotId: string = '';

    @Prop()
    squadron!: Squadron;

    get pilots(): Pilot[] {
        return (Object.values(pilots) as Pilot[]).filter((p) => p.faction === Faction.unknown || p.faction === this.squadron.faction);
    }

    selectPilot(id: string) {
        if (id) {
            //this.selectedPilotId = '';
            const pilot: Pilot | undefined = this.pilots.find((p) => p.id === id);
            console.log('before emit');
            this.$emit('select-pilot', pilot);
        }
    }
}