import store from './index';
import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import Squadron from "@/models/squadron";
import Faction from "@/models/faction";
import {spitfireV} from "@/data/planes";
import SquadronElement from "@/models/squadronElement";
import {regularPilot} from "@/data/pilots";
import {uuid} from "uuidv4";

@Module({name: 'squadron-module', dynamic: true, store, namespaced: true})
export default class SquadronModule extends VuexModule {
    _squadrons: Squadron[] = [
        new Squadron({
            id: uuid(),
            name: '52 Jagdgeswader',
            faction: Faction.DE,
            plane: spitfireV,
            elements: [
                new SquadronElement({
                    name: 'Element 1',
                    pilots: [
                        regularPilot,
                        regularPilot,
                        regularPilot
                    ]
                })
            ]
        }),
        new Squadron({
            id: uuid(),
            name: '53 Jagdgeswader',
            faction: Faction.DE,
            plane: spitfireV,
            elements: [
                new SquadronElement({
                    name: 'Element 1',
                    pilots: [
                        regularPilot,
                        regularPilot,
                        regularPilot
                    ]
                }),
                new SquadronElement({
                    name: 'Element 2',
                    pilots: [
                        regularPilot,
                        regularPilot
                    ]
                })
            ]
        })
    ];

    get squadrons(): Squadron[]
    {
        return this._squadrons;
    }

    _squadron: Squadron = new Squadron();

    get squadron(): Squadron {
        return this._squadron;
    }

    @Action
    createSquadronAction(squadron: Squadron): void
    {
        this.createSquadMutation(squadron);
    }

    @Action
    getSquadronAction(id: string): void
    {
        const selectedSquadron: Squadron | undefined = this._squadrons.find((s) => s.id === id);
        console.log(selectedSquadron, id);
        if (selectedSquadron)
        {
            this.updateSquadronMutation(selectedSquadron);
        }
    }

    @Mutation
    createSquadMutation(squadron: Squadron): void
    {
        this._squadron = squadron;
    }

    @Mutation
    updateSquadronMutation(squadron: Squadron): void
    {
        this._squadron = new Squadron(squadron);
    }
}

export const squadronModule: SquadronModule = getModule(SquadronModule);