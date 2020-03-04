<template>
    <google-spreadsheet-data-provider v-slot="{ aircrafts, pilots, cards }">
        <div id="app" :class="classes">
            <header class="navbar"></header>

            <main class="squadron">

                <section class="name">
                    <editable-element tag="h1"
                                      :content="squadron.name"
                                      @update="squadron.name = $event"></editable-element>
                </section>

                <div class="actions"></div>

                <section class="elements">
                    <selectable-element v-for="element in squadron.elements"
                                        :key="element.id"
                                        :squadron="squadron"
                                        :aircraft="currentAircraft(aircrafts)"
                                        :element="element"
                                        :is-active="selectedElementId === element.id"
                                        @click.native="selectedElementId = element.id">
                    </selectable-element>
                    <selectable-element :is-placeholder="true"
                                        @click.native="addElement">
                    </selectable-element>
                </section>

                <section class="pilots">
                    <squadron-element v-if="currentElement"
                                      :aircraft-name="squadron.aircraftName"
                                      :aircraft-points="squadron.aircraftPoints"
                                      :squadron-element="currentElement"
                                      @remove-element="removeElement"
                                      @remove-pilot="removePilot">
                    </squadron-element>
                </section>

                <div class="selector-categories">
                    <h3>Configure your squadron</h3>
                    <selector-container>
                        <selector-card
                                :name="selectedFactionId ? $options.filters.factionName(selectedFactionId) : 'Factions'"
                                id="factions"
                                v-model="selectedCategoryId">
                            <div class="placeholder-icon"/>
                        </selector-card>
                        <selector-card :name="selectedPlaneName ? selectedPlaneName : 'Aircrafts'"
                                       id="aircrafts"
                                       v-model="selectedCategoryId">
                            <div class="placeholder-icon"/>
                        </selector-card>
                        <selector-card name="Pilots"
                                       id="pilots"
                                       v-model="selectedCategoryId">
                            <div class="placeholder-icon"/>
                        </selector-card>
                    </selector-container>
                </div>

                <div class="selector-items">
                    <faction-selector v-if="selectedCategoryId === 'factions'" :squadron="squadron"></faction-selector>

                    <aircraft-selector v-if="selectedCategoryId === 'aircrafts'"
                                       :current-aircraft="squadron.aircraft"
                                       :faction="squadron.faction"
                                       :aircrafts="aircrafts"
                                       @select-aircraft="addAircraft"></aircraft-selector>

                    <pilot-selector v-if="selectedCategoryId === 'pilots'"
                                    :faction="squadron.faction"
                                    :pilots="pilots"
                                    @select-pilot="addPilot($event)"></pilot-selector>
                </div>


                <squadron-meta :squadron="squadron" :aircraft="currentAircraft(aircrafts)"></squadron-meta>
            </main>

            <footer class="footer">
                Made with &hearts; by <a class="footer__link" href="https://github.com/Benjamindudok" target="_blank">Benjamin
                Dudok</a>
            </footer>
        </div>
    </google-spreadsheet-data-provider>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>
