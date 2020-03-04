<template>
    <li class="squadron-pilot">
      <div class="squadron-pilot__image-container">
        <div class="placeholder-icon" />
      </div>
      <section class="squadron-pilot__content">
        <h3 class="squadron-pilot__name">
          {{pilot.name}}
          <span class="squadron-pilot__points">({{pilot.points}})</span>
        </h3>
        <p v-if="aircraftName" class="squadron-pilot__plane">
          {{aircraftName}} <span class="squadron-pilot__points">({{aircraftPoints}})</span>
        </p>
        <ul class="squadron-pilot__traits">
          <li v-for="trait in pilot.traits"
              :key="trait.id"
              class="squadron-pilot__trait">
            {{trait.title}}
          </li>
        </ul>
      </section>
      <span class="squadron-pilot__level">{{pilot.level}}</span>
      <button class="squadron-pilot__remove" @click="remove">&times;</button>
    </li>
</template>

<script lang="ts" src="./squadron-pilot.ts"></script>
<style scoped lang="scss" src="./squadron-pilot.scss"></style>
