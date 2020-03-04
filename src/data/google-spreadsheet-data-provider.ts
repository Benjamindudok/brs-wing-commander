import {CreateElement, VNode} from 'vue';
import {Component, Vue} from 'vue-property-decorator';
import Aircraft from "@/models/aircraft";
import Pilot from "@/models/pilot";
import AircraftTypes from "@/models/aircraftTypes";
import Faction from "@/models/faction";
import RetentionTypes from "@/models/retentionTypes";
import Card from "@/models/card";
import CardTypes from "@/models/cardTypes";

@Component
export default class GoogleSpreadsheetDataProvider extends Vue {
    apiKey = process.env.VUE_APP_GOOGLE_API_KEY;
    discoveryDocs = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    scopes = "https://www.googleapis.com/auth/spreadsheets.readonly";

    cards: Card[] = [];
    aircrafts: Aircraft[] = [];
    pilots: Pilot[] = [];

    handleClientLoad() {
        gapi.load('client', this.initClient);
    }

    async initClient() {
        await gapi.client.init({
            apiKey: this.apiKey,
            discoveryDocs: this.discoveryDocs,
            scope: this.scopes
        });

        await this.getCardsData();
        this.getAircraftData();
        this.getPilotData();
    }

    async getCardsData(): Promise<void> {
        const rows: string[][] = await this.getDataFromSpreadsheet('\'Cards\'!A2:H');
        rows.map((r, id) => {
            this.cards.push(new Card({
                id: id,
                title: r[0],
                type: r[1] as CardTypes,
                description: r[2],
                playDescription: r[3],
                doDescription: r[4],
                bonus: [],
                retention: r[6] as RetentionTypes,
                reactionary: r[7] === "Yes"
            }));
        });

        console.log(this.cards);
    }

    async getAircraftData(): Promise<void> {
        const rows: string[][] = await this.getDataFromSpreadsheet('\'Planes\'!A2:L');
        rows.map((r, id) => {
            this.aircrafts.push(new Aircraft({
                id: id,
                name: r[0],
                faction: r[1] as Faction,
                year: Number(r[2]),
                points: Number(r[3]),
                type: r[4] as AircraftTypes,
                firepower: Number(r[5]),
                agility: Number(r[6]),
                speed: Number(r[7]),
                actualSpeed: Number(r[8]),
                traits: [],
                turretDegree: Number(r[10]),
                turretFirepower: Number(r[11]),
                turretBonusFront: Number(r[12]),
                turretBonusRear: Number(r[13]),
                bomber: r[14] === 'Yes',
                engines: Number(r[15])
            }));
        });
    }

    async getPilotData(): Promise<void> {
        const rows: string[][] = await this.getDataFromSpreadsheet('\'Pilots\'!A2:I');
        rows.map((r, id) => {
            this.pilots.push(new Pilot({
                id: id,
                name: r[0],
                faction: r[1] as Faction,
                type: r[2] as AircraftTypes,
                level: Number(r[3]),
                firepowerModifier: Number(r[4]),
                agilityModifier: Number(r[5]),
                speedModifier: Number(r[6]),
                points: Number(r[8]),
            }));
        });
    }

    async getDataFromSpreadsheet(range: string): Promise<string[][]> {
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1nOHcmPBNfDJIoztzWiT4pTnouSe-PxGzHfrO8kTPRCM',
            range
        });

        return response.result.values ?? [];
    }

    created(): void {
        if (!document.querySelector('script[src="https://apis.google.com/js/api.js"]')) {
            const tag = document.createElement('script');
            tag.src = "https://apis.google.com/js/api.js";
            tag.onload = this.handleClientLoad;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            if (firstScriptTag && firstScriptTag.parentNode) {
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
        }
    }

    render(h: CreateElement): VNode {
        return this.$scopedSlots.default!({aircrafts: this.aircrafts, cards: this.cards, pilots: this.pilots}) as any;
    }
}