<template>
    <router-link class="squadron-card"
                 :to="`/squadrons/${squadron.id}`">
        <section class="squadron-card__content">
            <h3 class="squadron-card__name">{{squadron.name}}</h3>
            <p v-if="squadron.plane"
               class="squadron-card__plane">
                {{squadron.plane.name}}
            </p>
        </section>
        <div class="squadron__card__points">
            <span class="squadron-card__title">{{pointsTotal}}</span>
            points
        </div>
    </router-link>
</template>

<script lang="ts" src="./squadron-card.ts"></script>
<style lang="scss" src="./squadron-card.scss"></style>
