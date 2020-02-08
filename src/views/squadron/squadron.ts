import {Component, Vue} from 'vue-property-decorator';
import {planesModule} from "@/store/planes-module";
import Plane from "@/models/plane";
import SquadronElement from "@/models/squadronElement";
import Squadron from "@/models/squadron";
import PilotSkillLevels from "@/models/pilotSkillLevels";
import PilotSkillPoints from "@/models/pilotSkillPoints";
import Faction from "@/models/faction";
import {squadronModule} from "@/store/squadron-module";

@Component
export default class SquadronView extends Vue {
    squadron: Squadron = new Squadron({ faction: Faction.GB });
    selectedPlaneId: string = '';

    get planes(): Plane[] {
        return planesModule.planes;
    }

    get pointsTotal(): number {
        let points: number = 0;

        for (const element of this.squadron.elements)
        {
            points += element.pilots.reduce((a, p) => {
                if (p.points)
                {
                    return a + p.points
                }
                else
                {
                    if (p.skill === PilotSkillLevels.rookie)
                    {
                        return a + PilotSkillPoints.rookie;
                    }
                    else if (p.skill === PilotSkillLevels.regular)
                    {
                        return a + PilotSkillPoints.regular;
                    }
                    else if (p.skill === PilotSkillLevels.veteran)
                    {
                        return a + PilotSkillPoints.veteran;
                    }
                    else if (p.skill === PilotSkillLevels.ace)
                    {
                        return a + PilotSkillPoints.ace;
                    }
                }

                return 0;
            }, 0);

            if (this.squadron.plane)
            {
                points += element.pilots.length * this.squadron.plane.points;
            }
        }

        return points;
    }

    created(): void
    {
        if (squadronModule.squadron.id)
        {
            this.squadron = new Squadron(squadronModule.squadron);
        }
    }

    addElement(event: Event): void {
        this.squadron.elements.push(new SquadronElement());
    }

    removeElement(index: number) {
        this.squadron.elements.splice(index, 1);
    }
}