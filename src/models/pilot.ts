import AircraftTypes from "@/models/aircraftTypes";
import Card from "@/models/card";
import PilotSkillLevels from "@/models/pilotSkillLevels";
import Faction from "@/models/faction";

export default class Pilot {
    id: number = 0;
    name: string = '';
    faction: Faction = Faction.unknown;
    type: AircraftTypes = AircraftTypes.unknown;
    level: PilotSkillLevels = PilotSkillLevels.rookie;
    firepowerModifier: number | null = null;
    agilityModifier: number | null = null;
    speedModifier: number | null = null;
    traits: Card[] = [];
    points: number = 0;

    public constructor(init?: Partial<Pilot>) {
        Object.assign(this, init);
    }
}