<template>
    <div>
        <h2>Create a new squadron</h2>
        <p>
            Squadrons consist of at least 2 elements, and all fly the same aircraft. Various pilots can be chosen,
            but named aces can only be picked once.
        </p>

        <form-container ref="observer">
            <form-fieldset class="create-squadron__name">
                <form-input v-model="squadron.name"
                            label="Name"
                            placeholder="Enter your squadron's name"
                            :required="true"></form-input>
            </form-fieldset>

            <form-fieldset>
                <h3 class="create-squadron__label">Faction</h3>
                <div class="create-squadron__factions">
                    <selectable-faction v-for="faction in factions"
                                        :key="faction.id"
                                        :faction="faction"
                                        v-model="squadron.faction">
                    </selectable-faction>
                </div>
            </form-fieldset>

<!--            <div class="create-squadron__planes">-->
<!--                <h3 class="create-squadron__label">Select a plane</h3>-->
<!--                <selectable-plane v-for="plane in planes"-->
<!--                                    :key="plane.id"-->
<!--                                    :plane="plane"-->
<!--                                    v-model="selectedPlaneId">-->
<!--                </selectable-plane>-->
<!--            </div>-->

            <brs-button variant="primary" @click="create">create</brs-button>
        </form-container>

    </div>
</template>

<script lang="ts" src="./create-squadron.ts"></script>
<style lang="scss" src="./create-squadron.scss"></style>
