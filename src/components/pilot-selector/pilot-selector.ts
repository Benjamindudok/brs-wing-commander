import {Component, Prop, Vue} from 'vue-property-decorator';
import Pilot from "../../models/pilot";
import Faction from "@/models/faction";

@Component

export default class PilotSelector extends Vue {
    selectedPilotId: string = '';

    @Prop()
    faction!: Faction;

    @Prop()
    pilots!: Pilot[];

    get availablePilots(): Pilot[] {
        return this.pilots.filter((p) => p.faction === Faction.unknown || p.faction === this.faction);
    }

    selectPilot(id: number) {
        if (id) {
            const pilot: Pilot | undefined = this.pilots.find((p) => p.id === id);
            this.$emit('select-pilot', pilot);
        }
    }
}