<template>
    <overlay class="create-squadron" :show="show" @close="close">
        create squadron

        <form>
            <fieldset class="create-squadron__name">
                <form-input label="Squadron name" v-model="squadron.name"></form-input>
            </fieldset>

            <div class="create-squadron__factions">
                <h3 class="create-squadron__label">Select a faction</h3>
                <selectable-faction v-for="faction in factions"
                                    :key="faction.id"
                                    :faction="faction"
                                    v-model="squadron.faction">
                </selectable-faction>
            </div>

            <div class="create-squadron__planes">
                <h3 class="create-squadron__label">Select a plane</h3>
                <selectable-plane v-for="plane in planes"
                                    :key="plane.id"
                                    :plane="plane"
                                    v-model="selectedPlaneId">
                </selectable-plane>
            </div>

            <brs-button variant="primary" type="block" @click="create">create</brs-button>
        </form>

    </overlay>
</template>

<script lang="ts" src="./create-squadron.ts"></script>
<style lang="scss" src="./create-squadron.scss"></style>
