<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import Header from "./components/Header.vue" ;
  import CPU_GPU from "./components/Contents/CPU_GPU.vue" ;
  import RAM from "./components/Contents/RAM.vue" ;
  import STORAGE from "./components/Contents/STORAGE.vue" ;
  import Button from "./components/Button.vue" ;
  import Result from "./components/Result.vue" ;
  import { cpuStore } from "./stores/cpu";
  import { gpuStore } from "./stores/gpu";
  import { ramStore } from "./stores/ram";
  import { storageStore } from "./stores/storage";

  const { cpudata } = storeToRefs(cpuStore())
  const { gpudata } = storeToRefs(gpuStore())
  const { ramdata } = storeToRefs(ramStore())
  const { storagedata } = storeToRefs(storageStore())
</script>

<template>
    <Header></Header>
    <CPU_GPU type="CPU"></CPU_GPU>
    <CPU_GPU type="GPU"></CPU_GPU>
    <RAM></RAM>
    <STORAGE></STORAGE>
    {{ cpudata }}
    <br>
    {{ gpudata }}
    <br>
    {{ ramdata }}
    <br>
    {{ storagedata }}
    <Button></Button>
    <Result></Result>
</template>

<style scoped>

</style>
