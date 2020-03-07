import {Component, Vue} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import Faction from "@/models/faction";
import SquadronElement from "@/models/squadronElement";
import Pilot from "@/models/pilot";
import SquadronPilot from "@/models/squadronPilot";
import Aircraft from "@/models/aircraft";
import Card from "@/models/card";

@Component
export default class App extends Vue {
    squadron: Squadron = new Squadron({
        name: 'Squad name here',
        elements: [
            new SquadronElement({id: 0, name: 'Element name'})
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

    get currentElementIndex(): number | null {
        return this.squadron.elements.findIndex((e) => e.id === this.selectedElementId) ?? 0;
    }

    get selectedFactionId(): string | null {
        return this.squadron.faction ?? null;
    }

    get selectedPlaneName(): string | null {
        return this.squadron.aircraftName;
    }

    get currentAircraft(): Function {
        return (aircrafts: Aircraft[]): Aircraft | null => {
            return aircrafts.find((a) => a.id === this.squadron.aircraftId) ?? null;
        };
    }

    addAircraft(aircraft: Aircraft): void {
        this.squadron.aircraftId = aircraft.id;
        this.squadron.aircraftName = aircraft.name;
        this.squadron.aircraftPoints = aircraft.points;
    }

    addElement(): void {
        const highestId: number = this.squadron.elements.length > 0 ? Math.max(...this.squadron.elements.map((e) => e.id)) : 0;
        this.squadron.elements.push(new SquadronElement({id: highestId + 1, name: 'Element name'}));
    }

    addPilot(pilot: Pilot): void {
        if (this.currentElement) {
            const highestId: number = this.currentElement.pilots.length > 0 ? Math.max(...this.currentElement.pilots.map((p) => p.id)) : 0;
            this.currentElement.pilots.push(new SquadronPilot({...pilot, id: highestId + 1, pilotId: pilot.id}));
        }
    }

    removeElement(id: number) {
        const elementIndex: number = this.squadron.elements.findIndex((e) => e.id === id);
        this.squadron.elements.splice(elementIndex, 1);
    }

    removePilot(id: number): void {
        const pilotIndex: number = this.currentElement?.pilots.findIndex((p) => p.id === id) ?? -1;
        if (pilotIndex !== -1) {
            this.currentElement?.pilots.splice(pilotIndex, 1);
        }
    }

    restore({aircrafts, pilots, cards}: { aircrafts: Aircraft[], pilots: Pilot[], cards: Card[] }): void {
        // when url has the name parameter
        // we assume it is a saved url, so we try to rebuild the squadron
        if (this.$route.params.name) {
            // get aircraft from aircraft data by id
            const aircraftToRestore: Aircraft | undefined = aircrafts.find((a) => this.$route.params.aircraftId && a.id === Number(this.$route.params.aircraftId));

            // restore elements
            const elements: SquadronElement[] = (Array.isArray(this.$route.query.element))
                ? (this.$route.query.element as string[]).map((e: string, index) => this.restoreSquadronElement(index, e.split(','), pilots))
                : [this.restoreSquadronElement(0, this.$route.query.element.split(','), pilots)];

            this.squadron = new Squadron({
                name: this.$route.params.name ?? 'New squadron',
                faction: this.$route.params.faction as Faction,
                aircraftId: Number(this.$route.params.aircraftId),
                aircraftName: aircraftToRestore?.name ?? null,
                aircraftPoints: aircraftToRestore?.points ?? null,
                elements
            });
        }
    }

    restoreSquadronElement(id: number, elementData: string[], pilots: Pilot[]): SquadronElement {
        return new SquadronElement({
            id,
            name: elementData[0],
            pilots: elementData.slice(1).map((idAsString, index) => {
                const pilotId: number = Number(idAsString);
                const matchedPilot: Pilot | undefined = pilots.find((p) => p.id === pilotId);
                return new SquadronPilot({...matchedPilot, id: index, pilotId: matchedPilot?.id ?? null});
            })
        })
    }

    save(): void {
        this.$router.push({
            path: `/${this.squadron.name ?? 'New squadron'}/${this.squadron.faction ?? Faction.unknown}/${this.squadron.aircraftId?.toString()}`,
            query: {
                element: this.squadron.elements.map((e) => [e.name, ...e.pilots.map((p) => p.pilotId)].toString())
            }
        })
    }
}