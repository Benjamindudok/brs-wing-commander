<template>
    <div class="squadrons">
        List of squadrons here
        <brs-button variant="primary" type="block" @click="showSquadronOverlay = true">New squadron</brs-button>

        <create-squadron :show="showSquadronOverlay" @close="showSquadronOverlay = false"></create-squadron>
    </div>
</template>

<script lang="ts" src="./squadrons.ts"></script>
