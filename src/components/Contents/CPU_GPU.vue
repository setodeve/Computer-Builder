<script lang="ts">
import { cpuStore } from '../../stores/cpu'
import { gpuStore } from '../../stores/gpu'
import { defineComponent } from "vue";
export default defineComponent ({
  setup(props : any){
    const store = props.type=="CPU" ? cpuStore() : gpuStore() ;
    if(props.type=="CPU"){
      store.getData("https://api.recursionist.io/builder/computers?type=cpu")
    }else{
      store.getData("https://api.recursionist.io/builder/computers?type=gpu")
    }

    return {
      store
    }

  },
  props: {
    type: String,
    step: String
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
        <div class="text-xl pb-1">step{{ step }}:Select your {{ type }}</div>
        <div id="select" class="flex flex-wrap space-x-2 pl-3">
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
            <select id="selectModel" v-model="selected" v-on:change="store.setModelData($event,selected)" class="text-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="-">-</option>
              <option v-for="(data, index) in store.trimData(store.extractBrandData(store.$state.fetchdata),'Model')" :key=index v-bind:value="data" >
                {{ data['Model'] }}
              </option>
            </select>
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