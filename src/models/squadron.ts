import Plane from "@/models/plane";
import SquadronElement from "@/models/squadronElement";
import Faction from "@/models/faction";

export default class Squadron {
    id: string = '';
    name: string = '';
    faction: Faction | null = null;
    plane: Plane | null = null;
    elements: SquadronElement[] = [];

    public constructor(init?: Partial<Squadron>) {
        Object.assign(this, init);
    }
}