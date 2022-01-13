<script setup lang="ts">
import { ref } from 'vue'

const vuex = ref('vuex')
</script>

<template>
  <div>{{ vuex.value }}</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
