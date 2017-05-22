<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/header-bootstrap.vue'
export default {
  name: 'app',
  components: { appHeader }
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

#app {
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-left: 50px;
  padding-right: 20px;
}
</style>
