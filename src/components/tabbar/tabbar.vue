<template>
    <nav class="tabbar">
      <ul class="tabbar__list">
        <li class="tabbar__item">
          <router-link class="tabbar__link" active-class="tabbar__link--is-active" to="/" :exact="true">
            <material-icon icon="dashboard"></material-icon>
          </router-link>
        </li>
        <li class="tabbar__item">
          <router-link class="tabbar__link" active-class="tabbar__link--is-active" to="/squadrons">
            <material-icon icon="near_me"></material-icon>
          </router-link>
        </li>
        <li class="tabbar__item">
          <router-link class="tabbar__link" active-class="tabbar__link--is-active" to="/cards">
            <material-icon icon="layers"></material-icon>
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script lang="ts" src="./tabbar.ts"></script>
<style scoped lang="scss" src="./tabbar.scss"></style>
