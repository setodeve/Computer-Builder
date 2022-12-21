<template>

    <div>Build Your Own PC</div>
    <div v-if="store.$state.Loading==true">
        <div>step1:Select your CPU</div>
        <div id="select">
          Brand
          <select id="selectBrand">          
            <option v-for="data in store.$state.fetchdata" :key="data.id" value="{{ data['Brand'] }}">
              {{ data['Brand'] }}
            </option>
          </select>

          Model 
          <select name="" id="">
            <option v-for="data in store.$state.fetchdata" :key="data.id" value="{{ data['Model'] }}">
              {{ data['Model'] }}
            </option>
          </select>        

        </div>
    </div>
    <div v-else>
      loading........
    </div>
</template>

<script setup="ts">
import { cpuStore } from '../stores/cpu'

  const store = cpuStore();
  store.getData("https://api.recursionist.io/builder/computers?type=cpu")

  // console.log(store.$state.fetchdata)

</script>

<style>

</style>