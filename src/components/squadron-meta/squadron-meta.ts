import {Component, Prop, Vue} from 'vue-property-decorator';
import Squadron from "@/models/squadron";
import PilotSkillLevels from "@/models/pilotSkillLevels";
import PilotSkillPoints from "@/models/pilotSkillPoints";
import Aircraft from "@/models/aircraft";

@Component
export default class SquadronMeta extends Vue {
    @Prop()
    squadron!: Squadron;

    @Prop()
    aircraft!: Aircraft | null;

    get pointsTotal(): number {
        let points: number = 0;

        for (const element of this.squadron.elements) {
            points += element.pilots.reduce((a, p) => {
                if (p.points) {
                    return a + p.points
                } else {
                    if (p.level === PilotSkillLevels.rookie) {
                        return a + PilotSkillPoints.rookie;
                    } else if (p.level === PilotSkillLevels.regular) {
                        return a + PilotSkillPoints.regular;
                    } else if (p.level === PilotSkillLevels.veteran) {
                        return a + PilotSkillPoints.veteran;
                    } else if (p.level === PilotSkillLevels.ace) {
                        return a + PilotSkillPoints.ace;
                    }
                }

                return 0;
            }, 0);

            if (this.aircraft) {
                points += element.pilots.length * (this.aircraft.points ?? 0);
            }
        }

        return points;
    }
}