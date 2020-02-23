import {Component, Vue} from 'vue-property-decorator';

@Component

export default class FormContainer extends Vue {
    get listeners(): unknown {
        return Object.assign(
            {},
            this.$listeners,
            {
                input: (e: Event) => {
                    this.$emit('input', (e.target as HTMLInputElement).value);
                }
            })
    }
}