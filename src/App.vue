<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import CPU_GPU from "./components/CPU_GPU.vue" ;
  import RAM from "./components/RAM.vue" ;
  import STORAGE from "./components/STORAGE.vue" ;
  import { cpuStore } from "./stores/cpu";
  import { gpuStore } from "./stores/gpu";
  
  const { cpudata } = storeToRefs(cpuStore())
  const { gpudata } = storeToRefs(gpuStore())

</script>

<template>
    <CPU_GPU type="CPU"></CPU_GPU>
    <CPU_GPU type="GPU"></CPU_GPU>
    <RAM></RAM>
    <STORAGE></STORAGE>
</template>

<style scoped>

</style>
