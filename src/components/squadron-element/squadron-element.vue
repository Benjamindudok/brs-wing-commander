<template>
    <li class="squadron-element">
        <editable-element tag="h3"
                          :content="squadronElement.name"
                          @update="squadronElement.name = $event"></editable-element>

        <brs-button variant="error"
                    type="text"
                    @click="remove">
            remove element
        </brs-button>

        <ul class="squadron-element__pilots">
            <squadron-pilot v-for="pilot in squadronElement.pilots"
                            :key="pilot.id"
                            :pilot="pilot"
                            :plane="squadron.aircraft"
                            @remove="removePilot"></squadron-pilot>
        </ul>
    </li>
</template>

<script lang="ts" src="./squadron-element.ts"></script>
<style scoped lang="scss" src="./squadron-element.scss"></style>
