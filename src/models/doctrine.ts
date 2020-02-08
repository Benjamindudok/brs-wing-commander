import Card from "@/models/card";
import CardTypes from "@/models/cardTypes";
import Trait from "@/models/trait";

export default class Doctrine extends Card {
    type: CardTypes = CardTypes.doctrine;
    bonus: Trait | null = null;

    public constructor(init?: Partial<Doctrine>) {
        super(init);
        Object.assign(this, init);
    }
}