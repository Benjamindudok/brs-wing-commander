<template>
    <label class="form-input">
        <span class="form-input__label">{{label}}</span>
        <input v-bind="$attrs"
               v-on="listeners"
               v-model="model"
               class="form-input__input">
    </label>
</template>

<script lang="ts" src="./form-input.ts"></script>
<style lang="scss" src="./form-input.scss"></style>
