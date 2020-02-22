<template>
    <div class="sidebar">
        <div class="sidebar__identity">
            <slot name="identity"></slot>
        </div>

        <ul class="sidebar__list">
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/squadrons">
                    <svg class="sidebar__icon" role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="homeIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="homeIconTitle">Home</title> <path d="M3 10.182V22h18V10.182L12 2z"/> </svg>
                    Browse squadrons
                </router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/your-squadrons">
                    <svg class="sidebar__icon" role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="cloudIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="cloudIconTitle">Cloud</title> <path d="M6.5,18 C4.01471863,18 2,15.9852814 2,13.5 C2,11.0147186 4.01471863,9 6.5,9 C6.9194849,9 7.3255638,9.05739789 7.71081142,9.16476838 C8.72277,7.28089089 10.711801,6 13,6 C15.9817502,6 18.4554927,8.17503894 18.9211951,11.0250841 C20.6555928,11.2331085 22,12.7095527 22,14.5 C22,16.4329966 20.4329966,18 18.5,18 L6.5,18 Z"/> </svg>
                    Your squadrons
                </router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/cards">
                    <svg class="sidebar__icon" role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="lineChartIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="lineChartIconTitle">Line Chart</title> <path d="M3,16 L8,11"/> <circle cx="9" cy="10" r="1"/> <circle cx="14" cy="15" r="1"/> <path d="M10 11L13 14M15 14L21 8"/> </svg>
                    Cards
                </router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/scenarios">
                    <svg class="sidebar__icon" width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="layersIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" color="#2329D6"> <title id="layersIconTitle">Layers</title> <path d="M12 4L20 8.00004L12 12L4 8.00004L12 4Z"/> <path d="M20 12L12 16L4 12"/> <path d="M20 16L12 20L4 16"/> </svg>
                    Scenario selector
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./sidebar.ts"></script>
<style lang="scss" src="./sidebar.scss"></style>
