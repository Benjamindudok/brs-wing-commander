import {Component, Prop, Vue} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import PilotSkillLevels from "@/models/pilotSkillLevels";
import PilotSkillPoints from "@/models/pilotSkillPoints";

@Component
export default class SquadronMeta extends Vue {
    @Prop()
    squadron!: Squadron;

    get pointsTotal(): number {
        let points: number = 0;

        for (const element of this.squadron.elements) {
            points += element.pilots.reduce((a, p) => {
                if (p.points) {
                    return a + p.points
                } else {
                    if (p.skill === PilotSkillLevels.rookie) {
                        return a + PilotSkillPoints.rookie;
                    } else if (p.skill === PilotSkillLevels.regular) {
                        return a + PilotSkillPoints.regular;
                    } else if (p.skill === PilotSkillLevels.veteran) {
                        return a + PilotSkillPoints.veteran;
                    } else if (p.skill === PilotSkillLevels.ace) {
                        return a + PilotSkillPoints.ace;
                    }
                }

                return 0;
            }, 0);

            if (this.squadron.plane) {
                points += element.pilots.length * this.squadron.plane.points;
            }
        }

        return points;
    }
}