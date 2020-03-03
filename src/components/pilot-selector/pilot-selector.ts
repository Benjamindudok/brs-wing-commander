import {Component, Prop, Vue} from 'vue-property-decorator';
import Squadron from "../../models/squadron";
import Pilot from "../../models/pilot";
import Faction from "@/models/faction";

@Component

export default class PilotSelector extends Vue {
    selectedPilotId: string = '';

    @Prop()
    squadron!: Squadron;

    @Prop()
    pilots!: Pilot[];

    get availablePilots(): Pilot[] {
        return this.pilots.filter((p) => p.faction === Faction.unknown || p.faction === this.squadron.faction);
    }

    selectPilot(id: number) {
        if (id) {
            const pilot: Pilot | undefined = this.pilots.find((p) => p.id === id);
            this.$emit('select-pilot', pilot);
        }
    }
}