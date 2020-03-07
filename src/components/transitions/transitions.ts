import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Transitions extends Vue
{
    @Prop({ default: 'fade' })
    public transitionName!: string;

    @Prop({ default: false })
    public appear!: boolean;

    @Prop()
    public mode!: string;

    @Prop()
    public group!: boolean;

    get type(): string
    {
        return (this.group) ? 'transition-group' : 'transition';
    }
}
