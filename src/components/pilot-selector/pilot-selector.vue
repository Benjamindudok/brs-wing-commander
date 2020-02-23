<template>
    <selector-container title="Pilots">
        <selector-card v-for="pilot in pilots"
                       :key="pilot.id"
                       :name="pilot.name"
                       :id="pilot.id"
                       v-model="selectedPilotId">
        </selector-card>
    </selector-container>
</template>

<script lang="ts" src="./pilot-selector.ts"></script>
<style lang="scss" src="./pilot-selector.scss"></style>
