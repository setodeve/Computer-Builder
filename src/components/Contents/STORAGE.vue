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

<template>
  <div>
    <div v-if="store.$state.Loading==true">
    <div class="text-xl pb-1">step4:Select your storage</div>
    <div id="select" class="flex flex-wrap space-x-2 pl-3">
      <span>
        HDD or SSD 
        <select id="selectStorage" v-on:change="store.getStorageData" class="text-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="-">-</option>
          <option value="HDD">HDD</option>
          <option value="SSD">SSD</option>
        </select>
      </span>
      <span>
        Storage
        <select id="selectSize" v-on:change="store.setSizeData" class="text-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="-">-</option>
          <option v-for="(data, index) in store.trimData(store.$state.fetchdata,'Size')" :key=index>
            {{ data['Size'] }}
          </option>
        </select>
      </span>
      <span>
        Brand
        <select id="selectBrand" v-on:change="store.setBrandData" class="text-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="-">-</option>
          <option v-for="(data, index) in store.trimData(store.$state.fetchdata,'Brand')" :key=index>
            {{ data['Brand'] }}
          </option>
        </select>
      </span>
      <span>
        Model
        <span v-if="store.$state.size!='-'&&store.$state.brand!='-'">
          <select id="selectModel" v-model="selected" v-on:change="store.setModelData($event,selected)" class="text-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="-">-</option>
            <option v-for="(data, index) in store.trimData(store.extractBrandData(store.$state.fetchdata),'Model')" :key=index v-bind:value="data" >
              {{ data['Model'] }}
            </option>
          </select>
        </span>
        <span v-else>
          <select id="selectModel" class="text-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="-">-</option>
          </select>
        </span>
      </span>
    </div>
    </div>
    <div v-else>
      loading........
    </div>
  </div>
</template>

<style>

</style>