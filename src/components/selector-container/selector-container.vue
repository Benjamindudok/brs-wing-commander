<template>
    <section class="selector-container">
        <h3 v-if="title" class="selector-container__title">{{title}}</h3>
        <div class="selector-container__items">
            <slot></slot>
        </div>
    </section>
</template>

<script lang="ts" src="./selector-container.ts"></script>
<style lang="scss" src="./selector-container.scss"></style>
