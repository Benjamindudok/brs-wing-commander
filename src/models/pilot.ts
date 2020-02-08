import PlaneTypes from "@/models/planeTypes";
import Trait from "@/models/trait";
import PilotSkillLevels from "@/models/pilotSkillLevels";
import Faction from "@/models/faction";
import {uuid} from "uuidv4";

export default class Pilot {
    id: string = uuid();
    name: string = '';
    bio: string = '';
    planeType: PlaneTypes = PlaneTypes.unknown;
    signatureTraitProperty: string = '';
    signatureTraitModifier: number = 0;
    traits: Trait[] = [];
    skill: PilotSkillLevels = PilotSkillLevels.rookie;
    points: number = 0;
    faction: Faction = Faction.unknown;

    public constructor(init?: Partial<Pilot>) {
        Object.assign(this, init);
    }
}