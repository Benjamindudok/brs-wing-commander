<template>
    <validation-provider tag="label"
                         class="form-input"
                         v-slot="{ errors }"
                         :name="label">
        <span class="form-input__label">{{label}}</span>
        <input v-bind="$attrs"
               v-on="listeners"
               v-model="model"
               class="form-input__input">
        <span v-if="errors && errors.length > 0"
              class="form-input__error">
            {{errors[0]}}
        </span>
    </validation-provider>
</template>

<script lang="ts" src="./form-input.ts"></script>
<style lang="scss" src="./form-input.scss"></style>
