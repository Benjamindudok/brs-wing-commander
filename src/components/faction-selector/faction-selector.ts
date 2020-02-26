import {Component, Prop, Vue} from 'vue-property-decorator';
import Faction from "@/models/faction";
import Squadron from "@/models/squadron";

@Component
export default class FactionSelector extends Vue
{
    @Prop()
    squadron!: Squadron;

    get factions(): Array<{ id: Faction, name: string }> {
        return [
            { id: Faction.GB, name: (this.$options.filters as any).factionName(Faction.GB) },
            { id: Faction.DE, name: (this.$options.filters as any).factionName(Faction.DE) },
            { id: Faction.JP, name: (this.$options.filters as any).factionName(Faction.JP) },
            { id: Faction.SV, name: (this.$options.filters as any).factionName(Faction.SV) },
            { id: Faction.US, name: (this.$options.filters as any).factionName(Faction.US) }
        ];
    }
}