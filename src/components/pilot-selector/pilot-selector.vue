<template>
    <selector-container title="Pilots">
        <selector-card v-for="pilot in availablePilots"
                       :key="pilot.id"
                       :name="pilot.name"
                       :id="pilot.id"
                       v-model="selectedPilotId"
                       @click="selectPilot(pilot.id)">
            <div class="placeholder-icon" />
        </selector-card>
    </selector-container>
</template>

<script lang="ts" src="./pilot-selector.ts"></script>
<style lang="scss" src="./pilot-selector.scss"></style>
