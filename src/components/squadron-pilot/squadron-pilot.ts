import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Pilot from "@/models/pilot";
import Aircraft from "@/models/aircraft";

@Component
export default class SquadronPilot extends Vue {
    @Prop()
    pilot!: Pilot;

    @Prop()
    aircraftName!: string | null;

    @Prop()
    aircraftPoints!: number | null;

    @Emit('remove')
    remove(): number {
        return this.pilot.id;
    }
}