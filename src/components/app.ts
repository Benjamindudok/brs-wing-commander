import {Component, Vue} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import Faction from "@/models/faction";
import SquadronElement from "@/models/squadronElement";
import Pilot from "@/models/pilot";
import SquadronPilot from "@/models/squadronPilot";
import Aircraft from "@/models/aircraft";

@Component
export default class App extends Vue {
    squadron: Squadron = new Squadron({
        name: 'Squad name here',
        elements: [
            new SquadronElement({ id: 0, name: 'Element name' })
        ]
    });

    selectedElementId: number = this.squadron?.elements[0]?.id ?? 0;
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

    get selectedPlaneName(): string | null {
        return this.squadron.aircraftName;
    }

    get currentAircraft(): Function
    {
        return (aircrafts: Aircraft[]): Aircraft | null =>
        {
            return aircrafts.find((a) => a.id === this.squadron.aircraftId) ?? null;
        };
    }

    addElement(): void {
        const highestId: number = this.squadron.elements.length > 0 ? Math.max(...this.squadron.elements.map((e) => e.id)) : 0;
        this.squadron.elements.push(new SquadronElement({ id: highestId + 1, name: 'Element name' }));
    }

    removeElement(id: number) {
        const elementIndex: number = this.squadron.elements.findIndex((e) => e.id === id);
        this.squadron.elements.splice(elementIndex, 1);
    }

    addPilot(pilot: Pilot): void {
        if (this.currentElement) {
            const highestId: number = this.currentElement.pilots.length > 0 ? Math.max(...this.currentElement.pilots.map((p) => p.id)) : 0;
            this.currentElement.pilots.push(new SquadronPilot({...pilot, id: highestId + 1, pilotId: pilot.id}));
        }
    }

    removePilot(id: number): void {
        const pilotIndex: number = this.currentElement?.pilots.findIndex((p) => p.id === id) ?? -1;
        if (pilotIndex !== -1) {
            this.currentElement?.pilots.splice(pilotIndex, 1);
        }
    }

    addAircraft(aircraft: Aircraft): void
    {
        this.squadron.aircraftId = aircraft.id;
        this.squadron.aircraftName = aircraft.name;
        this.squadron.aircraftPoints = aircraft.points;
    }
}