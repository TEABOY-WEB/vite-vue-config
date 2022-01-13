<script setup lang="ts">
import { ref } from 'vue'

const test = ref('test')
const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <div class="home">jest is god</div>
  <div class="test">{{ test }}</div>
  <button @click="increment">count is {{ count }}</button>
</template>

<style lang="scss">
.home {
  color: red;
}
</style>
