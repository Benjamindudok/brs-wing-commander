import Card from "@/models/card";
import CardTypes from "@/models/cardTypes";
import RetentionTypes from "@/models/retentionTypes";

export default class Theatre extends Card {
    type: CardTypes = CardTypes.theatre;
    RetentionType: RetentionTypes = RetentionTypes.remove;

    public constructor(init?: Partial<Theatre>) {
        super(init);
        Object.assign(this, init);
    }
}