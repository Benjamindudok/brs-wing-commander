<template>
    <div class="squadron">

        <div class="squadron__plane">
            <label for="plane">Plane</label>
            <select v-model="selectedPlaneId" id="plane" @click="onPlaneSelect">
                <option value="" disabled></option>
                <option v-for="plane in planes"
                        :key="plane.id"
                        :value="plane.id">
                    {{plane.name}}
                </option>
            </select>
        </div>
        total points: {{pointsTotal}}

        <ul class="squadron__members">
            <squadron-element v-for="(element, index) in squadron.elements"
                              :key="index"
                              :squadron="squadron"
                              :squadron-element="element"
                              @remove-element="removeElement">
            </squadron-element>
        </ul>

        <button @click="addElement">Add element</button>

    </div>
</template>

<script lang="ts" src="./squadron.ts"></script>
<style lang="scss" src="./squadron.scss"></style>
