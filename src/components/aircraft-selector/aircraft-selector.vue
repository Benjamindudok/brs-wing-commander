<template>
    <selector-container title="Aircraft">
        <selector-card v-for="aircraft in aircrafts"
                       :key="aircraft.id"
                       :name="aircraft.name"
                       :id="aircraft.id"
                       v-model="selectedPlaneId">
        </selector-card>
    </selector-container>
</template>

<script lang="ts" src="./aircraft-selector.ts"></script>
<style lang="scss" src="./aircraft-selector.scss"></style>
