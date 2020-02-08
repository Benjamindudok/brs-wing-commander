import store from './index';
import {getModule, Module, VuexModule} from 'vuex-module-decorators'
import traits from '@/data/traits';
import theatres from '@/data/theatre';
import doctrines from '@/data/doctrine';
import Trait from "@/models/trait";
import Theatre from "@/models/theatre";
import Doctrine from "@/models/doctrine";

@Module({name: 'cards-module', dynamic: true, store, namespaced: true})
export default class CardsModule extends VuexModule {
    _traits: Trait[] = Object.values(traits);

    get traits(): Trait[] {
        return this._traits;
    }

    _theatres: Theatre[] = Object.values(theatres);

    get theatres(): Theatre[] {
        return this._theatres;
    }

    _doctrines: Doctrine[] = Object.values(doctrines);

    get doctrines(): Doctrine[] {
        return this._doctrines;
    }
}

export const cardsModule: CardsModule = getModule(CardsModule);