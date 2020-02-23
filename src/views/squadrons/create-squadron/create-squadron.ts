import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import Plane from "@/models/plane";
import {planesModule} from "@/store/planes-module";
import Squadron from "@/models/squadron";
import Faction from "@/models/faction";
import {squadronModule} from "@/store/squadron-module";
import {uuid} from "uuidv4";
import {ValidationObserver} from 'vee-validate';

@Component
export default class CreateSquadron extends Vue {
    @Prop()
    show!: boolean;

    squadron: Squadron = new Squadron({ id: uuid() });
    selectedPlaneId: string = '';

    get factions(): Array<{ id: Faction, name: string }> {
        return [
            { id: Faction.GB, name: 'Great Britain' },
            { id: Faction.DE, name: 'Germany' },
            { id: Faction.JP, name: 'Japan' },
            { id: Faction.SV, name: 'Soviet Union' },
            { id: Faction.US, name: 'United States of America' }
        ];
    }

    get planes(): Plane[] {
        return planesModule.planes;
    }

    @Emit('close')
    close(): void
    {

    }

    async create(): Promise<void>
    {
        const result: any = await this.validate();
        if (result)
        {
            squadronModule.createSquadronAction(this.squadron);
            this.$router.push(`/squadrons/${this.squadron.id}`);
        }
    }

    @Watch('selectedPlaneId')
    setSelectedPlane(): void
    {
        if (this.selectedPlaneId)
        {
            const plane: Plane | undefined = this.planes.find((p) => p.id === this.selectedPlaneId);
            if (plane)
            {
                this.squadron.plane = new Plane(plane);
            }
        }
    }

    validate(): Promise<void>
    {
        return (this.$refs.observer as any).$children[0].validate();
    }
}