<template>
  <table>
  <tr>
    <td>CPU</td>
    <td>{{ data[0].Model}}</td>
  </tr>
  <tr>
    <td>GPU</td>
    <td>{{ data[1].Model}}</td>
  </tr>
  <tr>
    <td>RAM</td>
    <td>{{ data[2].Model}}</td>
  </tr>
  <tr>
    <td>STORAGE</td>
    <td>{{ data[3].Model}}</td>
  </tr>
</table>
  <div>
    <span>
      Gaming : {{ gamingResult.toFixed() }}%
      Work :{{ homeResult.toFixed() }}%
    </span>
  </div>

</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const gamingResult = this.data[0].Benchmark*0.6 + this.data[1].Benchmark*0.25 
                    + this.data[2].Benchmark*0.125 + this.data[3].Benchmark*0.025 ;
    const homeResult = this.data[0].Benchmark*0.6 +this.data[1].Benchmark*0.25 
                    + this.data[2].Benchmark*0.1 + this.data[3].Benchmark*0.05 ;
    return {
      gamingResult,
      homeResult
    }
  },
  props:{
      data: Array
  }
})
</script>

<style>

</style>