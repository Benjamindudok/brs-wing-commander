import {Component, Vue} from 'vue-property-decorator';
import {cardsModule} from "@/store/cards-module";
import Trait from "@/models/trait";
import Theatre from "@/models/theatre";
import Doctrine from "@/models/doctrine";

@Component
export default class Cards extends Vue {
    get traits(): Trait[]
    {
        return cardsModule.traits;
    }

    get doctrines(): Doctrine[]
    {
        return cardsModule.doctrines;
    }

    get theatres(): Theatre[]
    {
        return cardsModule.theatres;
    }
}