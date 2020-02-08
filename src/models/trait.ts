import Card from "@/models/card";
import CardTypes from "@/models/cardTypes";

export default class Trait extends Card {
    type: CardTypes = CardTypes.trait;
    isNegative: boolean = false;

    public constructor(init?: Partial<Trait>) {
        super(init);
        Object.assign(this, init);
    }
}