import {Component, Prop, Vue} from 'vue-property-decorator';
import Plane from "../../models/plane";

@Component
export default class SelectablePlane extends Vue {
    @Prop()
    value!: unknown;

    @Prop()
    plane!: Plane;

    get model(): unknown {
        return this.value;
    }

    set model(value: unknown) {
        this.$emit('input', value);
    }
}