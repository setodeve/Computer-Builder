<script lang="ts">
  import { storeToRefs } from "pinia";
  import Header from "./components/Header.vue" ;
  import CPU_GPU from "./components/Contents/CPU_GPU.vue" ;
  import RAM from "./components/Contents/RAM.vue" ;
  import STORAGE from "./components/Contents/STORAGE.vue" ;
  import Button from "./components/Button.vue" ;
  import Result from "./components/Result.vue" ;
  import { cpuStore } from "./stores/cpu";
  import { gpuStore } from "./stores/gpu";
  import { ramStore } from "./stores/ram";
  import { storageStore } from "./stores/storage";

  export default{
    setup(){
      const { cpudata } = storeToRefs(cpuStore())
      const { gpudata } = storeToRefs(gpuStore())
      const { ramdata } = storeToRefs(ramStore())
      const { storagedata } = storeToRefs(storageStore())
      let resultFlg = false;

      return {
        cpudata ,
        gpudata,
        ramdata,
        storagedata,
        resultFlg
      }
    },
    methods: {
      setData(){
        this.resultFlg = true;
        this.$forceUpdate();
      }
    },
    components: {
      Header : Header,
      CPU_GPU : CPU_GPU,
      RAM : RAM,
      STORAGE : STORAGE,
      Button : Button,
      Result : Result
    }
  }
</script>

<template>
  <div class="container bg-auto text-white mx-auto font-mono space-y-7">
    <Header></Header>
    <CPU_GPU type="CPU" step="1"></CPU_GPU>
    <CPU_GPU type="GPU" step="2"></CPU_GPU>
    <RAM></RAM>
    <STORAGE></STORAGE>
    <Button 
            :data=[Object.keys(cpudata).length,Object.keys(gpudata).length,Object.keys(ramdata).length,Object.keys(storagedata).length] 
            @myButton="setData">
    </Button>
    <br>
    <Result v-if="resultFlg" 
            :key="cpudata.Model + gpudata.Model + ramdata.Model + storagedata.Model"
            :cpuprops = cpudata
            :gpuprops = gpudata
            :ramprops = ramdata
            :storageprops = storagedata
            :calcdata = [cpudata.Benchmark,gpudata.Benchmark,ramdata.Benchmark,storagedata.Benchmark]>
    </Result>
    <div v-else>

    </div>
  </div>
</template>

<style scoped>

</style>
