import Faction from "@/models/faction";

export const factionName: any = (value: any): string => {
    switch (value) {
        case Faction.JP:
            return 'Imperial Air Force';
        case Faction.SV:
            return 'Soviet Air Force';
        case Faction.US:
            return 'U.S. Airforce';
        case Faction.GB:
            return 'Royal Air Force';
        case Faction.DE:
            return 'Luftwaffe';
    }

    return value;
};

export default factionName;