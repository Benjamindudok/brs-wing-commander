<template>
    <label class="selectable-pilot">
        <input class="selectable-pilot__input"
               type="radio"
               :name="pilot.name"
               :value="pilot.id"
               v-model="model"/>
        <span class="selectable-pilot__icon">
          <span>{{pilot.name}}</span>
        </span>
    </label>
</template>

<script lang="ts" src="./selectable-pilot.ts"></script>
<style lang="scss" src="./selectable-pilot.scss"></style>
