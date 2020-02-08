<template>
    <router-link class="card-list-item"
                 :to="`cards/${type}/${card.id}`">
        {{card.title}}
        <div class="card-list-item__description">
            {{card.description}}
        </div>
    </router-link>
</template>

<script lang="ts" src="./card-list-item.ts"></script>
<style scoped lang="scss" src="./card-list-item.scss"></style>
