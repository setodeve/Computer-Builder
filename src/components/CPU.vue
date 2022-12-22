<template>
    <div>Build Your Own PC</div>
    <div v-if="store.$state.Loading==true">
        <div>step1:Select your CPU</div>
        <div id="select">
          Brand
          <select id="selectBrand" v-on:change="store.setBrandData">          
            <option value="-">-</option>
            <option v-for="(data, index) in store.trimData(store.$state.fetchdata,'Brand')" :key=index>
              {{ data['Brand'] }}
            </option>
          </select>
          Model 
          <select name="" id="" v-model="selected" v-on:change="store.setModelData($event,selected)">
            <option value="-">-</option>
            <option v-for="(data, index) in store.trimData(store.extractBrandData(store.$state.fetchdata),'Model')" :key=index v-bind:value="data" >
              {{ data['Model'] }}
            </option>
          </select>
        </div>
    </div>
    <div v-else>
      loading........
    </div>
</template>

<script lang="ts">
import { cpuStore } from '../stores/cpu'
import { defineComponent } from "vue";
export default defineComponent ({
  setup(){
    const store = cpuStore();
    store.getData("https://api.recursionist.io/builder/computers?type=cpu")
    return {
      store
    }
  },
  data(){
        return{
            selected:'-'
        }
    },
})
</script>

<style>

</style>