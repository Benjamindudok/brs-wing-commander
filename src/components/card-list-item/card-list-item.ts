import {Component, Prop, Vue} from 'vue-property-decorator';
import PilotSkillLevels from "../../models/pilotSkillLevels";
import Pilot from "@/models/pilot";
import PilotSkillPoints from "@/models/pilotSkillPoints";
import Trait from "@/models/trait";
import Doctrine from "@/models/doctrine";
import Theatre from "@/models/theatre";

@Component
export default class CardListItem extends Vue {
    @Prop()
    card!: Trait | Doctrine | Theatre;

    @Prop()
    type!: string;
}