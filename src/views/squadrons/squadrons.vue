<template>
    <div class="squadrons">
        List of squadrons here
        <router-link to="/squadrons/new"
                     v-slot="{ navigate }">
            <button @click="navigate">New squadron</button>
        </router-link>
    </div>
</template>

<script lang="ts" src="./squadrons.ts"></script>
