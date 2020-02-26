import {Component, Vue} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import {uuid} from "uuidv4";
import Faction from "@/models/faction";
import PilotSkillLevels from "@/models/pilotSkillLevels";
import PilotSkillPoints from "@/models/pilotSkillPoints";
import SquadronElement from "@/models/squadronElement";
import planes from "@/data/planes";
import {regularPilot} from "@/data/pilots";
import Pilot from "@/models/pilot";

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
                    new Pilot({...regularPilot, id: uuid()}),
                    new Pilot({...regularPilot, id: uuid()}),
                    new Pilot({...regularPilot, id: uuid()})
                ]
            }),
            new SquadronElement({
                name: 'Element 2',
                pilots: [
                    new Pilot({...regularPilot, id: uuid()}),
                    new Pilot({...regularPilot, id: uuid()})
                ]
            })
        ]
    });

    selectedElementId: string = this.squadron?.elements[0].id ?? '';
    selectedCategoryId: string = 'factions';

    get classes(): Record<string, boolean> {
        return {
            'app': true,
            'app--luftwaffe': this.squadron.faction === Faction.DE,
            'app--raf': this.squadron.faction === Faction.GB,
            'app--usaf': this.squadron.faction === Faction.US,
            'app--saf': this.squadron.faction === Faction.SV,
            'app--ija': this.squadron.faction === Faction.JP
        }
    }

    get currentElement(): SquadronElement | null {
        return this.squadron.elements.find((e) => e.id === this.selectedElementId) ?? null;
    }

    get selectedFactionId(): string | null {
        return this.squadron.faction ?? null;
    }

    get selectedPlaneName(): string | null
    {
        return this.squadron.plane?.name ?? null;
    }

    addElement(event: Event): void {
        this.squadron.elements.push(new SquadronElement({name: 'Element name'}));
    }

    removeElement(id: string) {
        const elementIndex: number = this.squadron.elements.findIndex((e) => e.id === id);
        this.squadron.elements.splice(elementIndex, 1);
    }

    addPilot(pilot: Pilot): void {
        this.currentElement?.pilots.push(new Pilot({...pilot, id: uuid()}));
    }

    removePilot(id: string): void {
        const pilotIndex: number | null = this.currentElement?.pilots.findIndex((p) => p.id === id) ?? null;
        if (pilotIndex) {
            this.currentElement?.pilots.splice(pilotIndex, 1);
        }
    }
}