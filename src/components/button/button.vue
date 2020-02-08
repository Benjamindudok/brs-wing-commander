<template>
    <button type="button"
            :class="classes"
            v-bind="$attrs"
            v-on="$listeners">
        <slot></slot>
    </button>
</template>

<script lang="ts" src="./button.ts"></script>
<style lang="scss" src="./button.scss"></style>
