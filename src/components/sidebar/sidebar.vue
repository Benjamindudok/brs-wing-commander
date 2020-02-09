<template>
    <div class="sidebar">
        <div class="sidebar__identity">
            <slot name="identity"></slot>
        </div>

        <ul class="sidebar__list">
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/" :exact="true">
                    Dashboard
                </router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/squadrons">
                    Squadrons
                </router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/cards">
                    Cards
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./sidebar.ts"></script>
<style lang="scss" src="./sidebar.scss"></style>
