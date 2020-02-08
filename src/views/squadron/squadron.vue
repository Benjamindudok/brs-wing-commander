<template>
    <div class="squadron">
        {{squadron.name}}
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
