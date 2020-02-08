import store from './index';
import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import Squadron from "@/models/squadron";

@Module({name: 'squadron-module', dynamic: true, store, namespaced: true})
export default class SquadronModule extends VuexModule {
    _squadron: Squadron = new Squadron();

    get squadron(): Squadron {
        return this._squadron;
    }

    @Action
    createSquadronAction(squadron: Squadron): void
    {
        this.createSquadMutation(squadron);
    }

    @Mutation
    createSquadMutation(squadron: Squadron): void
    {
        this._squadron = squadron;
    }
}

export const squadronModule: SquadronModule = getModule(SquadronModule);