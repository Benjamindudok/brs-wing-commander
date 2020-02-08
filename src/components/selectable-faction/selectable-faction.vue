<template>
    <label class="selectable-faction">
        <input class="selectable-faction__input"
               type="radio"
               :name="faction.name"
               :value="faction.id"
               v-model="model"/>
        <span class="selectable-faction__icon">
          <span>{{faction.name}}</span>
        </span>
    </label>
</template>

<script lang="ts" src="./selectable-faction.ts"></script>
<style lang="scss" src="./selectable-faction.scss"></style>
