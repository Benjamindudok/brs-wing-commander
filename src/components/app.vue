<template>
    <google-spreadsheet-data-provider v-slot="{ aircrafts, pilots, cards, loading }" @loaded="restore">
        <brs-transition transition-name="fade" :appear="true">
            <div v-if="!loading" id="app" :class="classes">
                <header class="navbar"></header>

                <main class="squadron">

                    <editable-element class="name"
                                      tag="h1"
                                      :content="squadron.name"
                                      @update="squadron.name = $event"></editable-element>

                    <div class="actions">
                        <brs-button type="ghost" @click="save()">get shareable link</brs-button>
                    </div>

                    <brs-transition class="elements" transition-name="slide-from-left" :appear="true" :group="true">
                        <selectable-element v-for="element in squadron.elements"
                                            :key="element.id"
                                            :squadron="squadron"
                                            :aircraft="currentAircraft(aircrafts)"
                                            :element="element"
                                            :is-active="selectedElementId === element.id"
                                            @click.native="selectedElementId = element.id">
                        </selectable-element>
                        <selectable-element key="add"
                                            :is-placeholder="true"
                                            @click.native="addElement">
                        </selectable-element>
                    </brs-transition>

                    <section class="pilots">
                        <squadron-element v-if="currentElement"
                                          :index="currentElementIndex"
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
                            <selector-card name="Factions"
                                           id="factions"
                                           v-model="selectedCategoryId">
                                <div class="placeholder-icon"/>
                            </selector-card>
                            <selector-card name="Aircrafts"
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
<!--                        <brs-transition transition-name="slide-from-down" :appear="true" mode="out-in">-->
                            <faction-selector v-if="selectedCategoryId === 'factions'"
                                              :squadron="squadron"></faction-selector>

                            <aircraft-selector v-else-if="selectedCategoryId === 'aircrafts'"
                                               :current-aircraft="squadron.aircraft"
                                               :faction="squadron.faction"
                                               :aircrafts="aircrafts"
                                               @select-aircraft="addAircraft"></aircraft-selector>

                            <pilot-selector v-else-if="selectedCategoryId === 'pilots'"
                                            :squadron="squadron"
                                            :pilots="pilots"
                                            @select-pilot="addPilot($event)"></pilot-selector>
<!--                        </brs-transition>-->
                    </div>


                    <squadron-meta :squadron="squadron" :aircraft="currentAircraft(aircrafts)"></squadron-meta>
                </main>

                <footer class="footer">
                    Made with &hearts; by
                    <a class="footer__link" href="https://github.com/Benjamindudok" target="_blank">Benjamin Dudok</a>
                </footer>
            </div>
            <div v-else class="app app--loading">
                <div class="loader">
                    <span class="loader__text">fetching data...</span>
                </div>
            </div>
        </brs-transition>
    </google-spreadsheet-data-provider>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>
