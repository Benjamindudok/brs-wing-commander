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
            {id: Faction.GB, name: 'Great Britain'},
            {id: Faction.DE, name: 'Germany'},
            {id: Faction.JP, name: 'Japan'},
            {id: Faction.SV, name: 'Soviet Union'},
            {id: Faction.US, name: 'United States of America'}
        ];
    }
}