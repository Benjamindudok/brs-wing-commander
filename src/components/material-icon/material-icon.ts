import { Component, Prop, Vue } from 'vue-property-decorator';

declare var require: any;

@Component

export default class MaterialIcon extends Vue
{
    @Prop()
    icon!: string;
}