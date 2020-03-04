import Pilot from "@/models/pilot";

export default class SquadronPilot extends Pilot {
    pilotId: number | null = null;

    public constructor(init?: Partial<SquadronPilot>) {
        super(init);
        Object.assign(this, init);
    }
}