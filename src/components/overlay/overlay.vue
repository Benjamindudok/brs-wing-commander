<template>
    <transition name="fade"
                enter-class="fade--enter"
                enter-to-class="fade--enter-to"
                enter-active-class="fade--enter-active"
                leave-class="fade--leave"
                leave-to-class="fade--leave-to"
                leave-active-class="fade--leave-active"
                @after-enter="onAfterEnter">

        <div id="overlay" :class="cssClasses" v-if="show">
            <div :class="{'overlay__content': true, 'overlay__content--is-centered': contentIsCentered}">

                <div class="overlay__container" v-if="contentIsCentered">
                    <slot></slot>
                </div>

                <slot v-else></slot>

            </div>

            <button type="button"
                    class="overlay__close"
                    @click="close">
                &times;
            </button>
        </div>

    </transition>
</template>

<script lang="ts" src="./overlay.ts"></script>
<style lang="scss" src="./overlay.scss"></style>
