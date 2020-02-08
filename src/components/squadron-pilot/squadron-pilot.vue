<template>
    <li class="squadron-pilot">
      <span class="squadron-pilot__level">{{pilot.skill}}</span>
      <section class="squadron-pilot__content">
        <h3 class="squadron-pilot__name">
          {{pilot.name}}
          <span class="squadron-pilot__points">({{points}})</span>
        </h3>
        <p v-if="plane" class="squadron-pilot__plane">
          {{plane.name}} <span class="squadron-pilot__points">({{plane.points}})</span>
        </p>
        <ul class="squadron-pilot__traits">
          <li v-for="trait in pilot.traits"
              :key="trait.id"
              class="squadron-pilot__trait">
            {{trait.title}}
          </li>
        </ul>
      </section>
    </li>
</template>

<script lang="ts" src="./squadron-pilot.ts"></script>
<style scoped lang="scss" src="./squadron-pilot.scss"></style>
