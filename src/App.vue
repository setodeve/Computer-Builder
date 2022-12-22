<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import CPU from "./components/CPU.vue" ;  
  import GPU from "./components/GPU.vue" ;
  import { cpuStore } from "./stores/cpu";
  import { gpuStore } from "./stores/gpu";
  
  const { cpudata } = storeToRefs(cpuStore())
  const { gpudata } = storeToRefs(gpuStore())

</script>

<template>
  <CPU></CPU>
  <GPU></GPU>
  <!-- {{ cpudata }}
  {{ gpudata }} -->
</template>

<style scoped>

</style>
