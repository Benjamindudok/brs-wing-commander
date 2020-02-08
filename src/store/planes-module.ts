import store from './index';
import {getModule, Module, VuexModule} from 'vuex-module-decorators'
import Plane from "@/models/plane";
import planes from '@/data/planes';

@Module({ name: 'planes-module', dynamic: true, store, namespaced: true })
export default class PlanesModule extends VuexModule {
    _planes: Plane[] = Object.values(planes);

    get planes(): Plane[] {
        return this._planes;
    }
}

export const planesModule: PlanesModule = getModule(PlanesModule);