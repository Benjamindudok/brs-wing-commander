import RetentionTypes from "@/models/retentionTypes";
import {uuid} from "uuidv4";

export default class Card {
    id: string = uuid();
    title: string = '';
    description: string = '';
    playDescription: string = '';
    doDescription: string = '';
    isReaction: boolean = false;
    RetentionType: RetentionTypes = RetentionTypes.discard;

    public constructor(init?: Partial<Card>) {
        Object.assign(this, init);
    }
}