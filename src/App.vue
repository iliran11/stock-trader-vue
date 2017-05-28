<template>
  <div id="app">
    <app-header></app-header>
    <transition name="router-transition">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import appHeader from './components/header-bootstrap.vue'
export default {
  name: 'app',
  components: { appHeader },
  created() {
    this.$store.dispatch('init').then(() => {
      this.$store.dispatch('endDay');
    })
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}

router-transition-enter {
  opacity: 0;
}

router-transition-enter-active {
  transition: opacity 10s;
}

router-transition-leave-active {
  opacity: 0;
  transition: opacity 10s;
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
