import {Component, Vue} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import Faction from "@/models/faction";
import SquadronElement from "@/models/squadronElement";
import Pilot from "@/models/pilot";

@Component
export default class App extends Vue {
    squadron: Squadron = new Squadron({
        name: 'Squad name here'
    });

    created(): void
    {
        console.log(this.squadron);
    }

    selectedElementId: string = this.squadron?.elements[0]?.id ?? '';
    selectedCategoryId: string = 'factions';

    get classes(): Record<string, boolean> {
        return {
            'app': true,
            'app--luftwaffe': this.squadron?.faction === Faction.DE,
            'app--raf': this.squadron?.faction === Faction.GB,
            'app--usaf': this.squadron?.faction === Faction.US,
            'app--saf': this.squadron?.faction === Faction.SV,
            'app--ija': this.squadron?.faction === Faction.JP
        }
    }

    get currentElement(): SquadronElement | null {
        return this.squadron?.elements.find((e) => e.id === this.selectedElementId) ?? null;
    }

    get selectedFactionId(): string | null {
        return this.squadron?.faction ?? null;
    }

    get selectedPlaneName(): string | null {
        return this.squadron?.aircraft?.name ?? null;
    }

    addElement(event: Event): void {
        this.squadron.elements.push(new SquadronElement({name: 'Element name'}));
    }

    removeElement(id: string) {
        const elementIndex: number = this.squadron.elements.findIndex((e) => e.id === id);
        this.squadron.elements.splice(elementIndex, 1);
    }

    addPilot(pilot: Pilot): void {
        if (this.currentElement) {
            const highestId: number = Math.max(...this.currentElement.pilots.map((p) => p.id));
            this.currentElement.pilots.push(new Pilot({...pilot, id: highestId + 1}));
        }
    }

    removePilot(id: number): void {
        const pilotIndex: number | null = this.currentElement?.pilots.findIndex((p) => p.id === id) ?? null;
        if (pilotIndex) {
            this.currentElement?.pilots.splice(pilotIndex, 1);
        }
    }
}