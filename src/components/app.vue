<template>
  <div id="app" class="app">
    <sidebar>
      <h1 slot="identity" class="app__identity">Airstrip</h1>
    </sidebar>

<!--    <nav-bar></nav-bar>-->

    <div class="app__content">
      <router-view/>
    </div>

    <div class="app__actions">
      <portal-target name="application-actions"></portal-target>
    </div>

<!--    <tab-bar></tab-bar>-->
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>
