<template>
    <label class="selectable-plane">
        <input class="selectable-plane__input"
               type="radio"
               :name="plane.name"
               :value="plane.id"
               v-model="model"/>
        <span class="selectable-plane__icon">
          <span>{{plane.name}}</span>
        </span>
    </label>
</template>

<script lang="ts" src="./selectable-plane.ts"></script>
<style lang="scss" src="./selectable-plane.scss"></style>
