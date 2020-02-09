<template>
    <div class="squadrons">
        List of squadrons here

        <portal to="application-actions">
            <brs-button variant="primary" type="icon" @click="showSquadronOverlay = true">
                <material-icon icon="add"></material-icon>
            </brs-button>
        </portal>

        <create-squadron :show="showSquadronOverlay" @close="showSquadronOverlay = false"></create-squadron>
    </div>
</template>

<script lang="ts" src="./squadrons.ts"></script>
