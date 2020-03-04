import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import Aircraft from "@/models/aircraft";
import Faction from "@/models/faction";

@Component

export default class AircraftSelector extends Vue {
    selectedAircraftId: number | null = null;

    @Prop()
    currentAircraftId!: number;

    @Prop()
    faction!: Faction;

    @Prop()
    aircrafts!: Aircraft[];

    get availableAircrafts(): Aircraft[] {
        if (this.faction) {
            return this.aircrafts.filter((p) => p.faction === this.faction);
        }

        return this.aircrafts;
    }

    mounted(): void {
        this.selectedAircraftId = this.currentAircraftId ?? null;
    }

    @Watch('selectedAircraftId')
    setSelectedPlane(): void {
        if (this.selectedAircraftId) {
            const plane: Aircraft | undefined = this.aircrafts.find((p) => p.id === this.selectedAircraftId);
            if (plane) {
                this.$emit('select-aircraft', new Aircraft(plane));
            }
        }
    }
}