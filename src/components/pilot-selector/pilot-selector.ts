import {Component, Prop, Vue} from 'vue-property-decorator';
import Pilot from "../../models/pilot";
import Faction from "@/models/faction";
import Squadron from "@/models/squadron";
import SquadronPilot from "@/models/squadronPilot";
import SquadronElement from "@/models/squadronElement";

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

    get pilotIsAlreadyPresent(): Function
    {
        return (pilotId: number, pilotName: string) =>
        {
            const allPilots: SquadronPilot[] = this.squadron.elements.reduce((a: SquadronPilot[], c: SquadronElement) => [...a, ...c.pilots], []);

            return allPilots.findIndex((p) => p.pilotId === pilotId) !== -1
                && pilotName.indexOf('Generic') === -1;
        }
    }

    selectPilot(id: number) {
        const pilot: Pilot | undefined = this.pilots.find((p) => p.id === id);
        if (pilot && !this.pilotIsAlreadyPresent(pilot.id, pilot.name))
        {
            this.$emit('select-pilot', pilot);
        }
    }
}