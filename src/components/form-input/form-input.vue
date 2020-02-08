<template>
    <label class="form-field">
        {{label}}
        <input v-bind="$attrs"
               v-on="listeners"
               v-model="model">
    </label>
</template>

<script lang="ts" src="./form-input.ts"></script>
<style lang="scss" src="./form-input.scss"></style>
