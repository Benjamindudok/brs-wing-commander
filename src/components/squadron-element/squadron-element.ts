import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import SquadronElement from "@/models/squadronElement";
import Pilot from "@/models/pilot";
import Squadron from "@/models/squadron";
import Faction from "@/models/faction";
import AircraftTypes from "@/models/aircraftTypes";

@Component
export default class SquadronElementComponent extends Vue {
    selectedPilotId: string = '';
    showAddPilotOverlay: boolean = false;

    @Prop()
    squadron!: Squadron;

    @Prop()
    squadronElement!: SquadronElement;

    @Prop()
    pilots!: Pilot[];

    @Emit('remove-element')
    remove(): string {
        return this.squadronElement.id;
    }

    @Emit('remove-pilot')
    removePilot(id: string): string {
        return id;
    }
}