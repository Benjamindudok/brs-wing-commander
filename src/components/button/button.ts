import {Component, Prop, Vue} from 'vue-property-decorator';

@Component

export default class Button extends Vue {
    @Prop()
    variant!: string;

    @Prop()
    type!: string;

    get classes(): Record<string, boolean> {
        return {
            'button': true,
            ['button--' + this.variant]: !!this.variant,
            ['button--' + this.type]: !!this.type
        }
    }
}