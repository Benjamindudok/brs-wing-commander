<template>
    <div class="sidebar">
        <div class="sidebar__identity">
            <slot name="identity"></slot>
        </div>

        <ul class="sidebar__list">
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/squadrons">
                    <material-icon class="sidebar__icon" icon="view_agenda"></material-icon>
                    Browse squadrons
                </router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/your-squadrons">
                    <material-icon class="sidebar__icon" icon="label_important"></material-icon>
                    Your squadrons
                </router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/cards">
                    <material-icon class="sidebar__icon" icon="bookmarks"></material-icon>
                    Cards
                </router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" active-class="sidebar__link--is-active" to="/scenarios">
                    <material-icon class="sidebar__icon" icon="library_books"></material-icon>
                    Scenario selector
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./sidebar.ts"></script>
<style lang="scss" src="./sidebar.scss"></style>
