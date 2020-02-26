import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import PilotSkillLevels from "../../models/pilotSkillLevels";
import Pilot from "@/models/pilot";
import PilotSkillPoints from "@/models/pilotSkillPoints";
import Plane from "@/models/plane";

@Component
export default class SquadronPilot extends Vue {
    @Prop()
    pilot!: Pilot;

    @Prop()
    plane!: Plane;

    get points(): number
    {
        if (this.pilot.points)
        {
            return this.pilot.points;
        }
        else if (this.pilot.skill === PilotSkillLevels.rookie)
        {
            return PilotSkillPoints.rookie;
        }
        else if (this.pilot.skill === PilotSkillLevels.regular)
        {
            return PilotSkillPoints.regular;
        }
        else if (this.pilot.skill === PilotSkillLevels.veteran)
        {
            return PilotSkillPoints.veteran;
        }
        else if (this.pilot.skill === PilotSkillLevels.ace)
        {
            return PilotSkillPoints.ace;
        }

        return 0;
    }

    @Emit('remove')
    remove(): string
    {
        return this.pilot.id;
    }
}