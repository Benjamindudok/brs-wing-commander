<template>
    <button :class="classes">
        <template v-if="element">
            <span class="selectable-element__points">{{totalPoints}}</span>
            <span class="selectable-element__name">{{element.name}}</span>
        </template>
        <material-icon v-if="isPlaceholder" icon="add"></material-icon>
    </button>
</template>

<script lang="ts" src="./selectable-element.ts"></script>
<style lang="scss" src="./selectable-element.scss"></style>
