import SquadronElement from "@/models/squadronElement";
import Faction from "@/models/faction";

export default class Squadron {
    id: number = 0;
    name: string = '';
    faction: Faction | null = null;
    aircraftId: number | null = null;
    aircraftName: string | null = null;
    aircraftPoints: number | null = null;
    elements: SquadronElement[] = [];

    public constructor(init?: Partial<Squadron>) {
        Object.assign(this, init);
    }
}