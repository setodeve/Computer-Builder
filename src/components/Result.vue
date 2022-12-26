<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup(props : any) {
      const gamingResult : number =   props.calcdata[0]*0.6 
                                    + props.calcdata[1]*0.25 
                                    + props.calcdata[2]*0.125 
                                    + props.calcdata[3]*0.025 ;
      const homeResult   : number =   props.calcdata[0]*0.6 
                                    + props.calcdata[1]*0.25 
                                    + props.calcdata[2]*0.1 
                                    + props.calcdata[3]*0.05 ;
      return {
        gamingResult,
        homeResult,
      };
    },
    props:{
      cpuprops : Object,
      gpuprops : Object,
      ramprops : Object,
      storageprops : Object,
      calcdata : Array
    }

  });
</script>

<template>
  <div class="overflow-x-auto relative space-y-4">
    <div class="text-2xl underline">
      Selected Parts
    </div>
    <div class="pl-3">
      <table class="w-full text-left">
        <tr>
          <td>CPU</td>
          <td>{{ cpuprops?.Model }}</td>
        </tr>
        <tr>
          <td>GPU</td>
          <td>{{ gpuprops?.Model }}</td>
        </tr>
        <tr>
          <td>RAM</td>
          <td>{{ ramprops?.Model }}</td>
        </tr>
        <tr>
          <td>STORAGE</td>
          <td>{{ storageprops?.Model }}</td>
        </tr>
      </table>
    </div>
    <div class="space-y-4">
      <div class="text-2xl underline">
        Result
      </div>
      <div class="flex space-x-5 pl-3">
        <span>
          Gaming : {{ gamingResult.toFixed() }}%
        </span>
        <span>
          Work :{{ homeResult.toFixed() }}%
        </span>
      </div>      
    </div>
  </div>
</template>

<style>

</style>