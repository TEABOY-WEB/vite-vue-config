<script setup lang="ts">
import { ref } from 'vue'

const axios = ref('axios')
</script>

<template>
  <div>{{ axios.value }}</div>
  <div>heihei</div>
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
