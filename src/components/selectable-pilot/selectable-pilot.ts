import {Component, Prop, Vue} from 'vue-property-decorator';
import Pilot from "../../models/pilot";

@Component
export default class SelectablePilot extends Vue {
    @Prop()
    value!: unknown;

    @Prop()
    pilot!: Pilot;

    get model(): unknown {
        return this.value;
    }

    set model(value: unknown) {
        this.$emit('input', value);
    }
}