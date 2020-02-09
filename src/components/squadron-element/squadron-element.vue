<template>
    <li class="squadron-element">
        <h2 class="squadron-element__title">Element name <span>({{ totalPoints }})</span></h2>

        <ul class="squadron-element__pilots">
            <squadron-pilot v-for="pilot in squadronElement.pilots"
                            :key="pilot.id"
                            :pilot="pilot"
                            :plane="squadron.plane"></squadron-pilot>
        </ul>

        <brs-button  type="block"
                    @click="showAddPilotOverlay = true">
            add pilot
        </brs-button>

        <add-pilot :show="showAddPilotOverlay"
                   @close="showAddPilotOverlay = false"
                   @select="onPilotSelected"></add-pilot>
    </li>
</template>

<script lang="ts" src="./squadron-element.ts"></script>
<style scoped lang="scss" src="./squadron-element.scss"></style>
