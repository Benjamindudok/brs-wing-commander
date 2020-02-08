import Plane from "@/models/plane";
import PlaneTypes from "@/models/planeTypes";
import Faction from "@/models/faction";
import {greatDive} from "@/data/traits";

export const spitfireII = new Plane({
    id: '13176160-7eea-4e74-81d1-a1ccd162e3d0',
    name: 'Spitfire II',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 1940,
    points: 31,
    power: 1,
    agility: 3,
    speed: 7,
    actualSpeed: 357,
    traits: [greatDive]
});

export const spitfireV = new Plane({
    id: 'bc8ce705-e2fb-40d5-bf08-45e71139869b',
    name: 'Spitfire V',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 1942,
    points: 32,
    power: 2,
    agility: 2,
    speed: 7,
    actualSpeed: 369,
    traits: [greatDive]
});

export const spitfireXIV = new Plane({
    id: '8d99018e-0174-412b-986e-8049122e1ae9',
    name: 'Spitfire XIV',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 1943,
    points: 43,
    power: 2,
    agility: 2,
    speed: 9,
    actualSpeed: 446,
    traits: [greatDive]
});

export default {
    spitfireII,
    spitfireV,
    spitfireXIV
}