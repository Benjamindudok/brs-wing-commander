import {Component, Prop, Vue} from 'vue-property-decorator';

@Component

export default class SelectorContainer extends Vue {
    @Prop()
    title!: string;
}