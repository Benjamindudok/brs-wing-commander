<template>
    <li class="squadron-element">
        <div class="squadron-element__header">
            <editable-element tag="h3"
                              :key="squadronElement.name"
                              class="squadron-element__title"
                              :content="squadronElement.name"
                              @update="squadronElement.name = $event"></editable-element>
            <brs-button v-if="index > 0"
                        class="squadron-element__remove"
                        variant="error"
                        type="text"
                        @click.native="remove">
                remove element
            </brs-button>
        </div>


        <ul class="squadron-element__pilots">
            <squadron-pilot v-for="pilot in squadronElement.pilots"
                            :key="pilot.id"
                            :pilot="pilot"
                            :aircraft-name="aircraftName"
                            :aircraft-points="aircraftPoints"
                            @remove="removePilot"></squadron-pilot>
        </ul>
    </li>
</template>

<script lang="ts" src="./squadron-element.ts"></script>
<style scoped lang="scss" src="./squadron-element.scss"></style>
