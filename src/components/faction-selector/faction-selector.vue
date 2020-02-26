<template>
    <selector-container title="Factions">
            <selector-card v-for="faction in factions"
                           :key="faction.id"
                           :name="faction.name"
                           :id="faction.id"
                           v-model="squadron.faction">
                <div class="placeholder-icon" />
            </selector-card>
    </selector-container>
</template>

<script lang="ts" src="./faction-selector.ts"></script>
<style lang="scss" src="./faction-selector.scss"></style>
