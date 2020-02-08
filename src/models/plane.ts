import PlaneTypes from "@/models/planeTypes";
import Faction from "@/models/faction";
import {uuid} from "uuidv4";
import Trait from "@/models/trait";

export default class Plane {
    id: string = uuid();
    name: string = '';
    type: PlaneTypes = PlaneTypes.unknown;
    faction: Faction = Faction.unknown;
    year: number = 0;
    points: number = 0;
    power: number = 0;
    agility: number = 0;
    speed: number = 0;
    actualSpeed: number = 0;
    traits: Trait[] = [];
    permanentTraits: Trait[] = [];

    public constructor(init?: Partial<Plane>) {
        Object.assign(this, init);
    }
}