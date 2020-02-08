<template>
    <overlay class="create-squadron" :show="show" @close="close">
        create squadron

        <form>
            <fieldset class="create-squadron__name">
                <label class="create-squadron__label">Squadron name</label>
                <input v-model="squadron.name"/>
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

            <button type="button" @click="create">create</button>
        </form>

    </overlay>
</template>

<script lang="ts" src="./create-squadron.ts"></script>
<style lang="scss" src="./create-squadron.scss"></style>
