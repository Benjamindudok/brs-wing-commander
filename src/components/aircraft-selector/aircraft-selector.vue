<template>
    <selector-container class="aircraft-selector" title="Aircraft">
        <selector-card v-for="aircraft in availableAircrafts"
                       :key="aircraft.id"
                       :name="aircraft.name"
                       :id="aircraft.id"
                       v-model="selectedAircraftId">
            <div class="placeholder-icon" />
        </selector-card>
    </selector-container>
</template>

<script lang="ts" src="./aircraft-selector.ts"></script>
<style lang="scss" src="./aircraft-selector.scss"></style>
