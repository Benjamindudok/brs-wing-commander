import Trait from "@/models/trait";
import RetentionTypes from "@/models/retentionTypes";

export const greatDive = new Trait({
    id: '2a2dd38c-b8f2-401d-a4e5-2c3d655f0e1f',
    title: `Great dive`,
    description: `The plane's heavy engine and low drag airframe meant it could dive faster`,
    playDescription: `On a plane with this trait burning advantage to dive`,
    doDescription: `Add the plane's maximum move (instead of 6) when burning advantage to dive`,
    RetentionType: RetentionTypes.discard
});

export default {
    greatDive,
}