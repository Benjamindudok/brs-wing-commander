import RetentionTypes from "@/models/retentionTypes";
import CardTypes from "@/models/cardTypes";

export default class Card {
    id: number = 0;
    title: string = '';
    type: CardTypes = CardTypes.trait;
    description: string = '';
    playDescription: string = '';
    doDescription: string = '';
    bonus: Card[] = [];
    reactionary: boolean = false;
    retention: RetentionTypes = RetentionTypes.discard;

    public constructor(init?: Partial<Card>) {
        Object.assign(this, init);
    }
}