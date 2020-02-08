<template>
    <div class="squadrons">
        List of squadrons here
        <button @click="showSquadronOverlay = true">New squadron</button>

        <create-squadron :show="showSquadronOverlay" @close="showSquadronOverlay = false"></create-squadron>
    </div>
</template>

<script lang="ts" src="./squadrons.ts"></script>
