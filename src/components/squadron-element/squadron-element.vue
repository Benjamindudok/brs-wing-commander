<template>
    <li class="squadron-element">
        <editable-element tag="h2"
                          class="squadron-element__title"
                          :content="squadronElement.name"
                          @update="squadronElement.name = $event"></editable-element>

        <ul class="squadron-element__pilots">
            <squadron-pilot v-for="pilot in squadronElement.pilots"
                            :key="pilot.id"
                            :pilot="pilot"
                            :plane="squadron.plane"></squadron-pilot>
        </ul>

        <brs-button type="text"
                    @click="showAddPilotOverlay = true">
            add pilot
        </brs-button>

        <brs-button type="text"
                    @click="remove">
            remove element
        </brs-button>
    </li>
</template>

<script lang="ts" src="./squadron-element.ts"></script>
<style scoped lang="scss" src="./squadron-element.scss"></style>
