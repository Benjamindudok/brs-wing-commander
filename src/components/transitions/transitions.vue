<template>
    <component  :is="type"
                :name="transitionName"
                :appear="appear"
                :mode="mode"
                tag="div"
                :enter-class="transitionName + '--enter'"
                :enter-active-class="transitionName + '--enter-active'"
                :enter-to-class="transitionName + '--enter-to'"
                :leave-class="transitionName + '--leave'"
                :leave-active-class="transitionName + '--leave-active'"
                :leave-to-class="transitionName + '--leave-to'"
                :appear-class="transitionName + '--appear'"
                :appear-active-class="transitionName + '--appear-active'"
                :appear-to-class="transitionName + '--appear-to'"
                v-on="$listeners">
        <slot></slot>
    </component>
</template>

<script lang="ts" src="./transitions.ts"></script>

<style lang="scss" src="./transitions.scss"></style>
