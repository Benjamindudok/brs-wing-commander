import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import DomHelper from '@/utils/dom-helper';

@Component

export default class Overlay extends Vue
{
    @Prop()
    show!: boolean;

    @Prop()
    variant!: string;

    @Prop()
    contentIsCentered!: boolean;

    get cssClasses(): any
    {
        return {
            'overlay': true,
            'overlay--primary': this.variant == 'primary',
            'overlay--secondary': this.variant == 'secondary'
        };
    }

    @Emit('close')
    close(): void
    {
        // close overlay
    }

    @Emit('after-enter')
    onAfterEnter(): void
    {
        // after enter transition
    }

    @Watch('show')
    onShown(shown: boolean): void
    {
        if (shown)
        {
            // disable scrollbar of body if needed,
            // so content is not scrollable behind the overlay
            if (DomHelper.getBodyHeight() > window.innerHeight)
            {
                // set top position to negate 'scrolling to top'
                document.body.style.top = -window.pageYOffset + 'px';

                // keep scrollbar visible, but make it disabled
                document.body.style.position = 'fixed';
                document.body.style.overflowY = 'scroll';
            }

            //
            // focus first input field on shown
            this.$nextTick(() =>
            {
                const input: HTMLInputElement | null = this.$el.querySelector('input');
                if (input)
                {
                    input.focus();
                }
            });

            document.onkeydown = (evt) =>
            {
                if (evt.keyCode == 27)
                {
                    this.close();
                }
            };
        }
        else
        {
            // reset scrollbar
            document.body.style.position = 'static';
            document.body.style.overflowY = 'initial';

            // reset scroll position using the body's top position
            let top: string = '0px';
            if (document.body.style.top)
            {
                top = document.body.style.top;
            }
            window.scrollTo(0, -parseInt(top.split('px')[0], 10));
            document.body.style.top = 'auto';
        }
    }
}