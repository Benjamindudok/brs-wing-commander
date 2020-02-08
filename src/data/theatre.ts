import RetentionTypes from "@/models/retentionTypes";
import Theatre from "@/models/theatre";

export const clearSkies = new Theatre({
    id: 'e22e40b7-7998-424e-9f3b-8fae3546c80f',
    title: `Clear skies`,
    description: `Perfect flying conditions with limited cloud cover`,
    playDescription: `Play this card during deployment`,
    doDescription: `Remove up to two cloud markers of your choice from the table`,
    RetentionType: RetentionTypes.remove
});

export default {
    clearSkies,
}