import Plane from "@/models/plane";
import SquadronElement from "@/models/squadronElement";
import { uuid } from 'uuidv4';
import Faction from "@/models/faction";

export default class Squadron {
    id: string = uuid();
    name: string = '';
    faction: Faction = Faction.unknown;
    plane: Plane | null = null;
    elements: SquadronElement[] = [];

    public constructor(init?: Partial<Squadron>) {
        Object.assign(this, init);
    }
}