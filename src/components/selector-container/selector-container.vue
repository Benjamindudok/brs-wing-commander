<template>
    <section class="selector-container">
        <h5 v-if="title" class="selector-container__title">{{title}}</h5>
        <div class="selector-container__items">
            <slot></slot>
        </div>
    </section>
</template>

<script lang="ts" src="./selector-container.ts"></script>
<style lang="scss" src="./selector-container.scss"></style>
