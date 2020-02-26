<template>
    <label class="selector-card">
        <input class="selector-card__input"
               type="radio"
               :name="name"
               :value="id"
               v-bind="$attrs"
               v-on="$listeners"
               v-model="model"/>
        <span class="selector-card__icon">
            <slot></slot>
          <span>{{name}}</span>
        </span>
    </label>
</template>

<script lang="ts" src="./selector-card.ts"></script>
<style lang="scss" src="./selector-card.scss"></style>
