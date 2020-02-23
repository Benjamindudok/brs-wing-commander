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

export const typhoonIB = new Plane({
    id: 'bb802d0a-7c00-4c56-8981-127d7c5da29d',
    name: 'Typhoon IB',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 1941,
    points: 31,
    power: 2,
    agility: 1,
    speed: 8,
    actualSpeed: 412,
    traits: [greatDive]
});

export const tempestV = new Plane({
    id: 'ee135a10-9840-4054-822e-1957fc730a39',
    name: 'Tempest V',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 1944,
    points: 44,
    power: 2,
    agility: 2,
    speed: 9,
    actualSpeed: 435,
    traits: [greatDive]
});

export const spitfireVB = new Plane({
    id: '6d4aa7c0-3523-4d34-aad2-5d00254a77f0',
    name: 'Spitfire VB',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 1941,
    points: 32,
    power: 2,
    agility: 2,
    speed: 7,
    actualSpeed: 369,
    traits: [greatDive]
});

export const hurricaneII = new Plane({
    id: 'b67a317f-d30d-4277-830a-0bcb692f319b',
    name: 'Hurricane II',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 1940,
    points: 29,
    power: 1,
    agility: 2,
    speed: 7,
    actualSpeed: 342,
    traits: [greatDive]
});

export const spitfireIX = new Plane({
    id: '23175d5d-45fb-41f8-a04b-b339489339a6',
    name: 'Spitfire IX',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 1942,
    points: 37,
    power: 2,
    agility: 2,
    speed: 8,
    actualSpeed: 410,
    traits: [greatDive]
});

export const mosquitoII = new Plane({
    id: '1ff41595-752f-467a-85dd-0c4961626cfd',
    name: 'Mosquito Mk II',
    type: PlaneTypes.twinFighterBomber,
    faction: Faction.GB,
    year: 1941,
    points: 62,
    power: 3,
    agility: 2,
    speed: 7,
    actualSpeed: 366,
    traits: [greatDive],
    permanentTraits: []
});

export const mosquitoVI = new Plane({
    id: '59ffe1c6-4fbb-4b24-b293-d86d670b80e6',
    name: 'Mosquito FB VI',
    type: PlaneTypes.twinFighterBomber,
    faction: Faction.GB,
    year: 1943,
    points: 67,
    power: 3,
    agility: 2,
    speed: 8,
    actualSpeed: 386,
    traits: [greatDive],
    permanentTraits: []
});

export const blenheimIV = new Plane({
    id: '21275464-d626-4e3a-928e-3bcef8d3f6cb',
    name: 'Blenheim IV',
    type: PlaneTypes.twinBomber,
    faction: Faction.GB,
    year: 1938,
    points: 0,
    power: 0,
    agility: 1,
    speed: 5,
    actualSpeed: 266,
    traits: [],
    permanentTraits: []
});

export const wellington1C = new Plane({
    id: '4c241970-2c9c-4a23-8bd5-afcc8c649e95',
    name: 'Wellington 1C',
    type: PlaneTypes.twinBomber,
    faction: Faction.GB,
    year: 1938,
    points: 0,
    power: 0,
    agility: 0,
    speed: 5,
    actualSpeed: 235,
    traits: [],
    permanentTraits: []
});

export const lancasterIII = new Plane({
    id: 'c5fafeed-d856-4653-87f3-346c961bb9ee',
    name: 'Lancaster III',
    type: PlaneTypes.fourBomber,
    faction: Faction.GB,
    year: 1942,
    points: 0,
    power: 0,
    agility: 0,
    speed: 6,
    actualSpeed: 286,
    traits: [],
    permanentTraits: []
});

export const boltonPaulDefiantI = new Plane({
    id: 'd06be9e6-72fe-41e2-a203-7d0fe2ee9865',
    name: 'Bolton Paul Defiant Mk I',
    type: PlaneTypes.singleFighter,
    faction: Faction.GB,
    year: 0,
    points: 0,
    power: 0,
    agility: 0,
    speed: 0,
    actualSpeed: 0,
    traits: [],
    permanentTraits: []
});

export const beaufighter1C = new Plane({
    id: 'b6531b69-6d79-4e45-a6a9-4556b3c665f1',
    name: 'Lancaster III',
    type: PlaneTypes.singleFighterBomber,
    faction: Faction.GB,
    year: 0,
    points: 0,
    power: 0,
    agility: 0,
    speed: 0,
    actualSpeed: 0,
    traits: [],
    permanentTraits: []
});

export const bf109e = new Plane({
    id: 'ed36a1e0-85a4-4285-915d-63f2635dafcf',
    name: 'BF-109 E',
    type: PlaneTypes.singleFighter,
    faction: Faction.DE,
    year: 1940,
    points: 31,
    power: 1,
    agility: 3,
    speed: 7,
    actualSpeed: 354,
    traits: [],
    permanentTraits: []
});

export const bf109f = new Plane({
    id: '237bfbbe-9741-4792-83c0-addbd99c1397',
    name: 'BF-109 F',
    type: PlaneTypes.singleFighter,
    faction: Faction.DE,
    year: 1940,
    points: 36,
    power: 1,
    agility: 3,
    speed: 8,
    actualSpeed: 390,
    traits: [],
    permanentTraits: []
});

export const bf109g = new Plane({
    id: '555c2e40-f31b-44e5-92d0-778931df3d0a',
    name: 'BF-109 G',
    type: PlaneTypes.singleFighter,
    faction: Faction.DE,
    year: 1942,
    points: 35,
    power: 2,
    agility: 2,
    speed: 8,
    actualSpeed: 400,
    traits: [],
    permanentTraits: []
});

export const bf109k = new Plane({
    id: '5085b7f3-7f11-4c30-8995-43663c104170',
    name: 'BF-109 K',
    type: PlaneTypes.singleFighter,
    faction: Faction.DE,
    year: 1944,
    points: 43,
    power: 3,
    agility: 1,
    speed: 9,
    actualSpeed: 442,
    traits: [],
    permanentTraits: []
});

export const ju88c = new Plane({
    id: 'a74a17b6-75c3-4c46-9ec7-5c57c0e918ec',
    name: 'JU-88 C',
    type: PlaneTypes.twinBomber,
    faction: Faction.DE,
    year: 1944,
    points: 29,
    power: 2,
    agility: 1,
    speed: 6,
    actualSpeed: 300,
    traits: [],
    permanentTraits: []
});

export const me410 = new Plane({
    id: '0e07d330-e954-457e-abe7-c69c88fd4f94',
    name: 'ME-410',
    type: PlaneTypes.twinFighterBomber,
    faction: Faction.DE,
    year: 1942,
    points: 53,
    power: 3,
    agility: 0,
    speed: 8,
    actualSpeed: 388,
    traits: [],
    permanentTraits: []
});

export const ju87b = new Plane({
    id: '09b444a7-5b49-4871-a7f9-66dd5fd4c909',
    name: 'JU-87B',
    type: PlaneTypes.singleFighterBomber,
    faction: Faction.DE,
    year: 1943,
    points: 0,
    power: 0,
    agility: 1,
    speed: 5,
    actualSpeed: 242,
    traits: [],
    permanentTraits: []
});

export default {
    spitfireII,
    spitfireV,
    spitfireXIV,
    typhoonIB,
    tempestV,
    spitfireVB,
    hurricaneII,
    spitfireIX,
    mosquitoII,
    mosquitoVI,
    blenheimIV,
    wellington1C,
    lancasterIII,
    boltonPaulDefiantI,
    beaufighter1C,
    bf109e,
    bf109f,
    bf109g,
    bf109k,
    ju88c,
    me410,
    ju87b
}