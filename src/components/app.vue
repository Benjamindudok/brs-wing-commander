<template>
    <div id="app" class="app">

        <header class="navbar"></header>

        <main class="squadron">

            <section class="name">
                <editable-element tag="h2"
                                  class="app__squadron-name"
                                  :content="squadron.name"
                                  @update="squadron.name = $event"></editable-element>
            </section>

            <div class="actions"></div>

            <section class="elements">
                <selectable-element v-for="element in squadron.elements"
                                    :key="element.id"
                                    :squadron="squadron"
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
                                  :key="currentElement ? currentElement.id : ''"
                                  :squadron="squadron"
                                  :squadron-element="currentElement"
                                  @remove="removeElement(currentElement.id)">
                </squadron-element>
            </section>

            <section class="faction">
                <h3>faction</h3>
                <div class="create-squadron__factions">
                    <selectable-faction v-for="faction in factions"
                                        :key="faction.id"
                                        :faction="faction"
                                        v-model="squadron.faction">
                    </selectable-faction>
                </div>
            </section>

            <section class="aircraft">
                <h3>aircraft</h3>
                <selectable-plane v-for="plane in planes"
                                  :key="plane.id"
                                  :plane="plane"
                                  v-model="selectedPlaneId">
                </selectable-plane>
            </section>

            <section class="meta">
                <h3>points</h3>
                {{pointsTotal}}
            </section>
        </main>

        <footer class="footer"></footer>
    </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>
