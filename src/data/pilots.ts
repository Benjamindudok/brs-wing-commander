import Pilot from "@/models/pilot";
import Faction from "@/models/faction";
import PlaneTypes from "@/models/planeTypes";
import PilotSkillLevels from "@/models/pilotSkillLevels";
import {greatDive} from "@/data/traits";
import PilotSkillPoints from "@/models/pilotSkillPoints";

export const rookiePilot = new Pilot({
    id: '9c8cbcc4-8cc7-4363-867d-0f6bc2900918',
    skill: PilotSkillLevels.rookie,
    points: PilotSkillPoints.rookie,
    name: 'Generic rookie pilot'
});

export const regularPilot = new Pilot({
    id: '06c61d41-7074-4a0c-8ff2-cf7258725af0',
    skill: PilotSkillLevels.regular,
    points: PilotSkillPoints.regular,
    name: 'Generic regular pilot'
});

export const veteranPilot = new Pilot({
    id: 'a1fbccea-e563-4885-9986-01456feb971c',
    skill: PilotSkillLevels.veteran,
    points: PilotSkillPoints.veteran,
    name: 'Generic veteran pilot'
});

export const acePilot = new Pilot({
    id: 'b70cb9d8-f214-4333-98fa-e8ea3052d21d',
    skill: PilotSkillLevels.ace,
    points: PilotSkillPoints.ace,
    name: 'Generic ace pilot'
});

export const witoldUrbanowicz = new Pilot({
    id: '6dcee068-23d0-4b51-8500-3077f0a3f240',
    name: `Witold Urbanowicz`,
    faction: Faction.GB,
    planeType: PlaneTypes.singleFighter,
    points: 125,
    skill: PilotSkillLevels.ace,
    bio: `Witold Urbanowicz shot down his first aircraft in 1936 - a Soviet reconnaissance plane.`,
    signatureTraitProperty: `Agility`,
    signatureTraitModifier: 1,
    traits: [greatDive],
    isGeneric: false
});

export default {
    rookiePilot,
    regularPilot,
    veteranPilot,
    acePilot,
    witoldUrbanowicz,
}