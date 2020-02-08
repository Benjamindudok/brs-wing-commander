import {Component, Prop, Vue} from 'vue-property-decorator';

@Component

export default class FormInput extends Vue {
    @Prop()
    label!: string;

    @Prop()
    value!: unknown;

    get model(): unknown {
        return this.value;
    }

    set model(value: unknown) {
        this.$emit('input', value);
    }

    get listeners(): unknown {
        return Object.assign(
            {},
            this.$listeners,
            {
                input: (e: Event) => {
                    this.$emit('input', (e.target as HTMLInputElement).value);
                }
            })
    }
}