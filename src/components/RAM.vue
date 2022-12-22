<template>
  <div v-if="store.$state.Loading==true">
      <div>step3:Select your memory card</div>
      <div id="select">
        HOW Many? 
        <select id="selectBrand" v-on:change="store.setBrandData">          
          <option value="-">-</option>
          <option v-for="(data, index) in store.trimData(store.$state.fetchdata,'Brand')" :key=index>
            {{ data['Brand'] }}
          </option>
        </select>
        Brand
        <select id="selectBrand" v-on:change="store.setBrandData">          
          <option value="-">-</option>
          <option v-for="(data, index) in store.trimData(store.$state.fetchdata,'Brand')" :key=index>
            {{ data['Brand'] }}
          </option>
        </select>
        <!-- Model 
        <select name="" id="" v-model="selected" v-on:change="store.setModelData($event,selected)">
          <option value="-">-</option>
          <option v-for="(data, index) in store.trimData(store.extractBrandData(store.$state.fetchdata),'Model')" :key=index v-bind:value="data" >
            {{ data['Model'] }}
          </option>
        </select> -->
      </div>
  </div>
  <div v-else>
    loading........
  </div>
</template>

<script lang="ts">
import { ramStore } from '../stores/ram'
import { defineComponent } from "vue";
export default defineComponent ({
  setup(){
    const store = ramStore();
    store.getData("https://api.recursionist.io/builder/computers?type=ram")

    return {
      store
    }
  },
  data(){
    return{
        selected:'-',
    }
  },
})
</script>

<style>

</style>