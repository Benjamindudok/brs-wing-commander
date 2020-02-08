<template>
    <div class="cards">
        <h3>Traits</h3>
        <ul class="cards__list">
            <li v-for="trait in traits"
                :key="trait.id"
                class="cards__item">
                <card-list-item :card="trait" type="trait"></card-list-item>
            </li>
        </ul>

        <h3>Doctrines</h3>
        <ul class="cards__list">
            <li v-for="doctrine in doctrines"
                :key="doctrine.id"
                class="cards__item">
                <card-list-item :card="doctrine" type="doctrine"></card-list-item>
            </li>
        </ul>

        <h3>Theatres</h3>
        <ul class="cards__list">
            <li v-for="theatre in theatres"
                :key="theatre.id"
                class="cards__item">
                <card-list-item :card="theatre" type="theatre"></card-list-item>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./cards.ts"></script>
<style lang="scss" src="./cards.scss"></style>
