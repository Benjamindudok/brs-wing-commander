import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Pilot from "@/models/pilot";
import Aircraft from "@/models/aircraft";

@Component
export default class SquadronPilot extends Vue {
    @Prop()
    pilot!: Pilot;

    @Prop()
    plane!: Aircraft;

    get points(): number {
        return this.pilot.points;
    }

    @Emit('remove')
    remove(): number {
        return this.pilot.id;
    }
}