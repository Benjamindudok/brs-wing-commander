import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Squadron from "../../models/squadron";
import Pilot from "../../models/pilot";
import pilots from "../../data/pilots";

@Component

export default class PilotSelector extends Vue {
    selectedPilotId: string = '';

    @Prop()
    squadron!: Squadron;

    get pilots(): Pilot[] {
        return (Object.values(pilots) as Pilot[]);
    }

    @Watch('selectedPilotId')
    selectPilot(id: string) {
        if (id) {
            this.selectedPilotId = '';
            const pilot: Pilot | undefined = this.pilots.find((p) => p.id === id);
            this.$emit('select-pilot', pilot);
        }
    }
}