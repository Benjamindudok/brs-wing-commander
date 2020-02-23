import {Component, Emit, Prop, Vue} from 'vue-property-decorator';

@Component
export default class EditableElement extends Vue {
    @Prop()
    tag!: string;

    @Prop()
    content!: string;

    mounted(): void
    {
        (this.$el as HTMLElement).innerText = this.content
    }

    @Emit('update')
    update(event: Event): string
    {
        return (event.target as HTMLElement).innerText
    }
}