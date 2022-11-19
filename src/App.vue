<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { colorScheme } from '@/styles';
const backgroundColor = ref(colorScheme.COLOR_D);
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}

body,
html {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
