<template>
    <router-link class="squadron-card"
                 :to="`/squadrons/${squadron.id}`">
        <div class="squadron-card__image-container">
            <img class="squadron-card__image" src="/images/spitfire-II.jpg" />
        </div>
        <section class="squadron-card__content">
            <h3 class="squadron-card__name">{{squadron.name}}</h3>
            <p v-if="squadron.plane"
               class="squadron-card__plane">
                {{squadron.plane.name}}
            </p>
        </section>
        <div class="squadron-card__points">
            <span class="squadron-card__points-amount">{{pointsTotal}}</span>
            pts
        </div>
    </router-link>
</template>

<script lang="ts" src="./squadron-card.ts"></script>
<style lang="scss" src="./squadron-card.scss"></style>
