import AircraftTypes from "@/models/aircraftTypes";
import Faction from "@/models/faction";
import Card from "@/models/card";

export default class Aircraft {
    id: number = 0;
    name: string = '';
    type: AircraftTypes = AircraftTypes.unknown;
    faction: Faction = Faction.unknown;
    year: number | null = null;
    points: number | null = null;
    firepower: number | null = null;
    agility: number | null = null;
    speed: number | null = null;
    actualSpeed: number | null = null;
    traits: Card[] = [];
    turretDegree: number | null = null;
    turretFirepower: number | null = null;
    turretBonusFront: number | null = null;
    turretBonusRear: number | null = null;
    bomber: boolean = false;
    engines: number = 1;

    public constructor(init?: Partial<Aircraft>) {
        Object.assign(this, init);
    }
}