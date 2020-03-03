import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import Aircraft from "@/models/aircraft";

@Component

export default class AircraftSelector extends Vue {
    selectedPlaneId: number | null = null;

    @Prop()
    squadron!: Squadron;

    @Prop()
    aircrafts!: Aircraft[];

    get availableAircrafts(): Aircraft[] {
        if (this.squadron.faction) {
            return this.aircrafts.filter((p) => p.faction === this.squadron.faction);
        }

        return this.aircrafts;
    }

    mounted(): void {
        this.selectedPlaneId = this.squadron?.aircraft?.id ?? null;
    }

    @Watch('selectedPlaneId')
    setSelectedPlane(): void {
        if (this.selectedPlaneId) {
            const plane: Aircraft | undefined = this.aircrafts.find((p) => p.id === this.selectedPlaneId);
            if (plane) {
                this.squadron.aircraft = new Aircraft(plane);
            }
        }
    }
}