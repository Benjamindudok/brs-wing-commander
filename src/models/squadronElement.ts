import SquadronPilot from "@/models/squadronPilot";

export default class SquadronElement {
    id: number = 0;
    name: string = '';
    pilots: SquadronPilot[] = [];

    public constructor(init?: Partial<SquadronElement>) {
        Object.assign(this, init);
    }
}