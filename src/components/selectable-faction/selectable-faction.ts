import {Component, Prop, Vue} from 'vue-property-decorator';
import Faction from "@/models/faction";

@Component
export default class SelectableFaction extends Vue {
    @Prop()
    value!: unknown;

    @Prop()
    faction!: { id: Faction, name: string };

    get model(): unknown {
        return this.value;
    }

    set model(value: unknown) {
        this.$emit('input', value);
    }
}