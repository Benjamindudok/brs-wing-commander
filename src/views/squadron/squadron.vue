<template>
    <div class="squadron">
        <h2>{{squadron.name}} ({{pointsTotal}})</h2>

        <ul class="squadron__members">
            <squadron-element v-for="(element, index) in squadron.elements"
                              :key="index"
                              :squadron="squadron"
                              :squadron-element="element"
                              @remove-element="removeElement">
            </squadron-element>
        </ul>

        <portal to="application-actions">
            <brs-button variant="primary"
                        type="icon"
                        @click="addElement">
                <material-icon icon="add"></material-icon>
            </brs-button>
        </portal>
    </div>
</template>

<script lang="ts" src="./squadron.ts"></script>
<style lang="scss" src="./squadron.scss"></style>
