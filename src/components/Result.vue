<template>
  {{ data }}
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
 props:{
    data: Array
 },
 created(){
  //   const gamingResult = data[0].Benchmark*0.6 +data[1].Benchmark*0.25 
  //                 + data[2].Benchmark*0.125 + data[3].Benchmark*0.025 ;
  //   const homeResult = data[0].Benchmark*0.6 +data[1].Benchmark*0.25 
  //                 + data[2].Benchmark*0.1 + data[3].Benchmark*0.05 ;
  // console.log(gamingResult);
  // console.log(homeResult);
 },
 watch: {
  // forceUpdateMyComponent() {
  //     this.$forceUpdate()
  // },
 }
})
</script>

<style>

</style>