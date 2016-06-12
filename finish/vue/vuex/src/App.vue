<template>
  <Display></Display>
  <Increment></Increment>
</template>

<script>
import Increment from './components/Increment.vue';
import Display from './components/Display.vue';
import store from './vuex/store.js';

export default {
  components: {
    Increment,
    Display
  },
  store
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
