<template>
    <validation-observer tag="form"
                         class="form"
                         v-bind="$attrs"
                         v-on="listeners">
        <slot></slot>
    </validation-observer>
</template>

<script lang="ts" src="./form-container.ts"></script>
<style lang="scss" src="./form-container.scss"></style>
