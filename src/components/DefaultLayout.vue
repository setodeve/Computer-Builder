<template>

    <div>Build Your Own PC</div>
    <div v-if="store.$state.Loading==true">
        <div>step1:Select your CPU</div>
        <div id="select">

          <select id="selectBrand">          
            <!-- <option value="{{ store.$state.fetchdata[0]['Brand'] }}">
              {{ store.$state.fetchdata[0]["Brand"] }}
            </option> -->
            <option v-for="data in store.$state.fetchdata" value="{{ data['Brand'] }}">
              {{ data['Brand'] }}
            </option>
          </select>

          Model 
          <select name="" id="">
          </select>        

        </div>
    </div>
    <div v-else>
      loading........
    </div>
</template>

<script setup="ts">
import { cpuStore } from '../stores/cpu'

  const parent = document.getElementById('select');
  const store = cpuStore();
  const selecthtml = store.getData("https://api.recursionist.io/builder/computers?type=cpu")

  console.log(store.$state.fetchdata)

</script>

<style>

</style>