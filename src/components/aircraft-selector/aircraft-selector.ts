import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import planes from "../../data/planes";
import Plane from "../../models/plane";

@Component

export default class AircraftSelector extends Vue {
    selectedPlaneId: string = planes.spitfireV.id;

    @Prop()
    squadron!: Squadron;

    get aircrafts(): Plane[] {
        if (this.squadron.faction) {
            return (Object.values(planes) as Plane[]).filter((p) => p.faction === this.squadron.faction);
        }

        return (Object.values(planes) as Plane[]);
    }

    mounted(): void
    {
        this.selectedPlaneId = this.squadron?.plane?.id ?? '';
    }

    @Watch('selectedPlaneId')
    setSelectedPlane(): void {
        if (this.selectedPlaneId) {
            const plane: Plane | undefined = this.aircrafts.find((p) => p.id === this.selectedPlaneId);
            if (plane) {
                this.squadron.plane = new Plane(plane);
            }
        }
    }
}