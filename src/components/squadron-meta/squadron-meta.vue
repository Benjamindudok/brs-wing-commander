<template>
    <div class="squadron-meta">
      <ul class="squadron-meta__list">
        <li class="squadron-meta__item">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">points</span>
            {{pointsTotal}}
          </h4>
        </li>
        <li class="squadron-meta__item squadron-meta__item--plane-stats" v-if="aircraft">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">Firepower</span>
            {{aircraft.firepower}}
          </h4>
        </li>
        <li class="squadron-meta__item squadron-meta__item--plane-stats" v-if="aircraft">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">Agility</span>
            {{aircraft.agility}}
          </h4>
        </li>
        <li class="squadron-meta__item squadron-meta__item--plane-stats" v-if="aircraft">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">Speed</span>
            {{aircraft.speed}}
          </h4>
        </li>
        <li class="squadron-meta__item squadron-meta__item--plane-stats" v-if="aircraft">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">Actual Speed</span>
            {{aircraft.actualSpeed}} <span class="squadron-meta__suffix">km/h</span>
          </h4>
        </li>
      </ul>
    </div>
</template>

<script lang="ts" src="./squadron-meta.ts"></script>
<style lang="scss" src="./squadron-meta.scss"></style>
