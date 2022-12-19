<template>

  <div>
    <div>Build Your Own PC</div>
    <div>
      <div>step1:Select your CPU</div>
      <div>
        Brand 
        <select name="" id="">
          
        </select>
        Model 
        <select name="" id="">

        </select>
        <pre>{{store.$state}}</pre>
      </div>
    </div>


  </div>
</template>

<script setup="ts">
  import { cpuStore } from '../stores/cpu'

  const store = cpuStore();

  store.getData("https://api.recursionist.io/builder/computers?type=cpu")
  console.log(store.setData(1,0))
  console.log(store.$state)
</script>

<style>

</style>