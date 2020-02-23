import {Component, Prop, Vue} from 'vue-property-decorator';
import Pilot from "../../models/pilot";

@Component
export default class SelectorCard extends Vue {
    @Prop()
    value!: unknown;

    @Prop()
    name!: string;

    @Prop()
    id!: unknown;

    get model(): unknown {
        return this.value;
    }

    set model(value: unknown) {
        this.$emit('input', value);
    }
}