<template>
  <div v-if="store.$state.Loading==true">
    <div>step4:Select your storage</div>
    <div id="select">
      HDD or SSD 
      <select id="selectStorage" v-on:change="store.getStorageData">          
        <option value="-">-</option>
        <option value="HDD">HDD</option>
        <option value="SSD">SSD</option>
      </select>
      Storage
      <select id="selectSize" v-on:change="store.setSizeData">          
        <option value="-">-</option>
        <option v-for="(data, index) in store.trimData(store.$state.fetchdata,'Size')" :key=index>
          {{ data['Size'] }}
        </option>
      </select>
      Brand
      <select id="selectBrand" v-on:change="store.setBrandData">          
        <option value="-">-</option>
        <option v-for="(data, index) in store.trimData(store.$state.fetchdata,'Brand')" :key=index>
          {{ data['Brand'] }}
        </option>
      </select>
      Model
      <span v-if="store.$state.size!='-'&&store.$state.brand!='-'">
        <select id="selectModel" v-model="selected" v-on:change="store.setModelData($event,selected)">
          <option value="-">-</option>
          <option v-for="(data, index) in store.trimData(store.extractBrandData(store.$state.fetchdata),'Model')" :key=index v-bind:value="data" >
            {{ data['Model'] }}
          </option>
        </select>
      </span>
      <span v-else>
        <select id="selectModel">
          <option value="-">-</option>
        </select>
      </span>
    </div>
  </div>
  <div v-else>
    loading........
  </div>
</template>

<script lang="ts">
import { storageStore } from '../../stores/storage'
import { defineComponent } from "vue";
export default defineComponent ({
  setup(){
    const store = storageStore();
    store.getData("https://api.recursionist.io/builder/computers")
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