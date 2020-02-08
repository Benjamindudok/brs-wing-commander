import Pilot from "@/models/pilot";
import {uuid} from "uuidv4";

export default class SquadronElement {
    id: string = uuid();
    name: string = '';
    pilots: Pilot[] = [];

    public constructor(init?: Partial<SquadronElement>) {
        Object.assign(this, init);
    }
}