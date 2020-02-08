import RetentionTypes from "@/models/retentionTypes";
import Doctrine from "@/models/doctrine";
import {greatDive} from "@/data/traits";

export const defensiveTactics = new Doctrine({
    id: '2414f2ff-ca1e-4c81-b706-d23d62728b5d',
    title: `Defensive tactics`,
    description: `A sharp turn could often spoil an enemy attack`,
    playDescription: `In reaction to enemy shooting`,
    doDescription: `The plane under attack may make a bonus 45 (90 with tight turn) degree turn before the shot is resolved`,
    RetentionType: RetentionTypes.pilot,
    isReaction: true,
    bonus: greatDive
});

export default {
    defensiveTactics,
}