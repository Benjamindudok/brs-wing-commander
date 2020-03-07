import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import SquadronElement from "@/models/squadronElement";

@Component
export default class SquadronElementComponent extends Vue {
    @Prop()
    index!: number;

    @Prop()
    squadronElement!: SquadronElement;

    @Prop()
    aircraftName!: string | null;

    @Prop()
    aircraftPoints!: number | null;

    @Emit('remove-element')
    remove(): number {
        return this.squadronElement.id;
    }

    @Emit('remove-pilot')
    removePilot(id: string): string {
        return id;
    }
}