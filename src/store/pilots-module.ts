import store from './index';
import {getModule, Module, VuexModule} from 'vuex-module-decorators'
import Pilot from "@/models/pilot";
import pilots from '@/data/pilots';

@Module({name: 'pilots-module', dynamic: true, store, namespaced: true})
export default class PilotsModule extends VuexModule {
    _pilots: Pilot[] = Object.values(pilots);

    get pilots(): Pilot[] {
        return this._pilots;
    }
}

export const pilotsModule: PilotsModule = getModule(PilotsModule);