<template>
    <component :is="tag" contenteditable="true" @input="update"></component>
</template>

<script lang="ts" src="./editable-element.ts"></script>
