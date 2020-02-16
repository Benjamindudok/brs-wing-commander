<template>
    <div class="squadrons">
        <h2>Your squadrons</h2>

        <ul class="squadrons__factions">
            <li class="squadrons__faction">
                <router-link class="squadrons__link"
                             :to="{ query: { }}"
                             exact-active-class="squadrons__link--is-active">
                    All
                </router-link>
            </li>
            <li v-for="faction in factions" :key="faction.id"
                class="squadrons__faction">
                <router-link class="squadrons__link"
                             :to="{ query: { ...$route.query, 'faction': faction.id }}"
                             exact-active-class="squadrons__link--is-active">
                    {{faction.name}}
                </router-link>
            </li>
        </ul>

        <div class="squadrons__list">
            <squadron v-for="squadron in squadrons"
                      :key="squadron.id"
                      class="squadrons__item"
                      :squadron="squadron">
            </squadron>
        </div>

        <portal to="application-actions">
            <brs-button variant="primary" type="icon" @click="showSquadronOverlay = true">
                <material-icon icon="add"></material-icon>
            </brs-button>
        </portal>

        <create-squadron :show="showSquadronOverlay" @close="showSquadronOverlay = false"></create-squadron>
    </div>
</template>

<script lang="ts" src="./squadrons.ts"></script>
<style lang="scss" src="./squadrons.scss"></style>
