import {Component, Vue, Watch} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import {uuid} from "uuidv4";
import Faction from "@/models/faction";
import Plane from "@/models/plane";
import PilotSkillLevels from "@/models/pilotSkillLevels";
import PilotSkillPoints from "@/models/pilotSkillPoints";
import SquadronElement from "@/models/squadronElement";
import planes from "@/data/planes";
import {regularPilot} from "@/data/pilots";

@Component
export default class App extends Vue {
    squadron: Squadron = new Squadron({
        id: uuid(),
        name: '53 Jagdgeswader',
        faction: Faction.GB,
        plane: planes.spitfireV,
        elements: [
            new SquadronElement({
                name: 'Element 1',
                pilots: [
                    regularPilot,
                    regularPilot,
                    regularPilot
                ]
            }),
            new SquadronElement({
                name: 'Element 2',
                pilots: [
                    regularPilot,
                    regularPilot
                ]
            })
        ]
    });
    selectedPlaneId: string = planes.spitfireV.id;
    selectedElementId: string = this.squadron?.elements[0].id ?? '';

    get classes(): Record<string, boolean>
    {
        return {
            'app': true,
            'app--luftwaffe': this.squadron.faction === Faction.DE,
            'app--raf': this.squadron.faction === Faction.GB,
            'app--usaf': this.squadron.faction === Faction.US,
            'app--saf': this.squadron.faction === Faction.SV,
            'app--ija': this.squadron.faction === Faction.JP
        }
    }

    get factions(): Array<{ id: Faction, name: string }> {
        return [
            {id: Faction.GB, name: 'Great Britain'},
            {id: Faction.DE, name: 'Germany'},
            {id: Faction.JP, name: 'Japan'},
            {id: Faction.SV, name: 'Soviet Union'},
            {id: Faction.US, name: 'United States of America'}
        ];
    }

    get planes(): Plane[] {
        if (this.squadron.faction) {
            return (Object.values(planes) as Plane[]).filter((p) => p.faction === this.squadron.faction);
        }

        return (Object.values(planes) as Plane[]);
    }

    get pointsTotal(): number {
        let points: number = 0;

        for (const element of this.squadron.elements) {
            points += element.pilots.reduce((a, p) => {
                if (p.points) {
                    return a + p.points
                } else {
                    if (p.skill === PilotSkillLevels.rookie) {
                        return a + PilotSkillPoints.rookie;
                    } else if (p.skill === PilotSkillLevels.regular) {
                        return a + PilotSkillPoints.regular;
                    } else if (p.skill === PilotSkillLevels.veteran) {
                        return a + PilotSkillPoints.veteran;
                    } else if (p.skill === PilotSkillLevels.ace) {
                        return a + PilotSkillPoints.ace;
                    }
                }

                return 0;
            }, 0);

            if (this.squadron.plane) {
                points += element.pilots.length * this.squadron.plane.points;
            }
        }

        return points;
    }

    get currentElement(): SquadronElement | null {
        return this.squadron.elements.find((e) => e.id === this.selectedElementId) ?? null;
    }

    addElement(event: Event): void {
        this.squadron.elements.push(new SquadronElement({ name: 'Element name'}));
    }

    removeElement(id: string) {
        const index: number = this.squadron.elements.findIndex((e) => e.id === id);
        this.squadron.elements.splice(index, 1);
    }

    @Watch('selectedPlaneId')
    setSelectedPlane(): void {
        if (this.selectedPlaneId) {
            const plane: Plane | undefined = this.planes.find((p) => p.id === this.selectedPlaneId);
            if (plane) {
                this.squadron.plane = new Plane(plane);
            }
        }
    }
}