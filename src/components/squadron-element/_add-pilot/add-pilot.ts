import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import Plane from "@/models/plane";
import {planesModule} from "@/store/planes-module";
import Squadron from "@/models/squadron";
import Faction from "@/models/faction";
import {squadronModule} from "@/store/squadron-module";
import {uuid} from "uuidv4";
import Pilot from "../../../models/pilot";
import {pilotsModule} from "../../../store/pilots-module";

@Component
export default class AddPilot extends Vue {
    @Prop()
    show!: boolean;

    get genericPilots(): Pilot[] {
        return pilotsModule.pilots.filter((p) => p.isGeneric);
    }

    get namedAces(): Pilot[]
    {
        return pilotsModule.pilots.filter((p) => !p.isGeneric);
    }

    @Emit('close')
    close(): void
    {

    }

    @Emit('select')
    onPilotSelect(pilot: Pilot): Pilot
    {
        this.close();

        return pilot;
    }
}