<template>
    <overlay class="create-squadron" :show="show" @close="close">
        <h2>Add pilot</h2>

        <div class="create-squadron__planes">
            <h3 class="create-squadron__label">Generic pilots</h3>
            <squadron-pilot v-for="pilot in genericPilots"
                            :key="pilot.id"
                            :pilot="pilot"
                            @click.native="onPilotSelect(pilot)">
            </squadron-pilot>
        </div>

        <div class="create-squadron__planes">
            <h3 class="create-squadron__label">Named aces</h3>
            <squadron-pilot v-for="pilot in namedAces"
                            :key="pilot.id"
                            :pilot="pilot"
                            @click.native="onPilotSelect(pilot)">
            </squadron-pilot>
        </div>

    </overlay>
</template>

<script lang="ts" src="./add-pilot.ts"></script>
<style lang="scss" src="./add-pilot.scss"></style>
