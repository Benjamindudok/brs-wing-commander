import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import SquadronElement from "@/models/squadronElement";
import Pilot from "@/models/pilot";
import {pilotsModule} from "@/store/pilots-module";
import Squadron from "@/models/squadron";
import Faction from "@/models/faction";
import PlaneTypes from "@/models/planeTypes";
import AddPilot from "@/components/squadron-element/_add-pilot/add-pilot.vue";

@Component({
    components: {
        AddPilot
    }
})
export default class SquadronElementComponent extends Vue {
    selectedPilotId: string = '';
    showAddPilotOverlay: boolean = false;

    @Prop()
    squadron!: Squadron;

    @Prop()
    squadronElement!: SquadronElement;

    get availablePilots(): Pilot[]
    {
        return pilotsModule.pilots.filter((p) =>
        {
            return (p.faction === Faction.unknown || p.faction === this.squadron.faction)
                && (p.planeType === PlaneTypes.unknown || p.planeType === this.squadron.plane?.type)
                && (p.planeType === PlaneTypes.unknown || !this.squadron.elements.find((e) => e.pilots.find((ep) => ep.id === p.id)));
        });
    }

    get totalPoints(): number
    {
        let points: number = 0;

        this.squadronElement.pilots.forEach((p) => {
            points += p.points;

            if (this.squadron.plane)
            {
                points += this.squadron.plane.points;
            }
        });

        return points;
    }

    @Emit('remove')
    remove(): string
    {
        return this.squadronElement.id;
    }

    onPilotSelected(pilot: Pilot): void
    {
        if (pilot)
        {
            this.squadronElement.pilots.push(new Pilot(pilot));
        }
    }
}