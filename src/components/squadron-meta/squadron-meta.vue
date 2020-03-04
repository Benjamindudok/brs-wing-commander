<template>
    <div class="squadron-meta">
      <ul class="squadron-meta__list">
        <li class="squadron-meta__item">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">points</span>
            {{pointsTotal}}
          </h4>
        </li>
        <li class="squadron-meta__item" v-if="squadron.aircraft">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">Firepower</span>
            {{squadron.aircraft.firepower}}
          </h4>
        </li>
        <li class="squadron-meta__item" v-if="squadron.aircraft">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">Agility</span>
            {{squadron.aircraft.agility}}
          </h4>
        </li>
        <li class="squadron-meta__item" v-if="squadron.aircraft">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">Speed</span>
            {{squadron.aircraft.speed}}
          </h4>
        </li>
        <li class="squadron-meta__item" v-if="squadron.aircraft">
          <h4 class="squadron-meta__value">
            <span class="squadron-meta__identifier">Actual Speed</span>
            {{squadron.aircraft.actualSpeed}} <span class="squadron-meta__suffix">km/h</span>
          </h4>
        </li>
      </ul>
    </div>
</template>

<script lang="ts" src="./squadron-meta.ts"></script>
<style scoped lang="scss" src="./squadron-meta.scss"></style>
