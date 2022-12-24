<template>
    <div v-if="type=='CPU'">
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
            <select id="selectModel" v-model="selected" v-on:change="store.setModelData($event,selected)">
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
    </div>
    <div v-else>
      <div v-if="store.$state.Loading==true">
        <div>step2:Select your GPU</div>
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
    </div>

</template>

<script lang="ts">
import { cpuStore } from '../../stores/cpu'
import { gpuStore } from '../../stores/gpu'
import { defineComponent } from "vue";
export default defineComponent ({
  setup(props){
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
    type: String
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