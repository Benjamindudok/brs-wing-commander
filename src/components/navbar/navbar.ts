import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
    goBack(): void
    {
        this.$router.back();
    }
}