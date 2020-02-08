<template>
    <li class="squadron-element">
        <h2 class="squadron-element__title">Element name <span>({{ totalPoints }})</span></h2>

        <ul class="squadron-element__pilots">
            <squadron-pilot v-for="pilot in squadronElement.pilots"
                            :key="pilot.id"
                            :pilot="pilot"
                            :plane="squadron.plane"></squadron-pilot>
        </ul>

        <label for="plane">add a pilot</label>
        <select v-model="selectedPilotId" id="plane">
            <option value="" disabled></option>
            <option v-for="pilot in availablePilots"
                    :key="pilot.id"
                    :value="pilot.id">
                {{pilot.name}}
            </option>
        </select>

        <button @click="addPilot">add pilot</button>
    </li>
</template>

<script lang="ts" src="./squadron-element.ts"></script>
<style scoped lang="scss" src="./squadron-element.scss"></style>
