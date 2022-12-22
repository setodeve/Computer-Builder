<template>

    <div>Build Your Own PC</div>
    <div v-if="store.$state.Loading==true">
        <div>step1:Select your CPU</div>
        <div id="select">
          Brand
          <select id="selectBrand" v-on:change="store.setBrandData">          
            <option value="-">-</option>
            <option v-for="(data, index) in store.trimData(store.$state.fetchdata,'Brand')" :key=index v-bind:value="data['Brand']">
              {{ data['Brand'] }}
            </option>
          </select>

          Model 
          <select name="" id="" v-on:change="store.setModelData">
            <option value="-">-</option>
            <option v-for="(data, index) in store.trimData(store.extractBrandData(store.$state.fetchdata),'Model')" :key=index v-bind:value="data['Model']" >
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

</script>

<style>

</style>