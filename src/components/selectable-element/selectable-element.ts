import {Component, Prop, Vue} from 'vue-property-decorator';
import SquadronElement from "@/models/squadronElement";
import Squadron from "@/models/squadron";
import Aircraft from "@/models/aircraft";

@Component
export default class SelectableElement extends Vue {
    @Prop()
    squadron!: Squadron;

    @Prop()
    aircraft!: Aircraft | null;

    @Prop()
    element!: SquadronElement;

    @Prop()
    isActive!: boolean;

    @Prop()
    isPlaceholder!: boolean;

    get classes(): Record<string, boolean>
    {
        return {
            'selectable-element': true,
            'selectable-element--is-active': this.isActive,
            'selectable-element--is-placeholder': this.isPlaceholder
        }
    }

    get totalPoints(): number
    {
        let points: number = 0;

        this.element.pilots.forEach((p) => {
            points += p.points;

            if (this.aircraft)
            {
                points += this.aircraft.points ?? 0;
            }
        });

        return points;
    }
}