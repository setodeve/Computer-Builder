<script>
import { defineComponent } from "vue";
export default defineComponent({
 props:{
    data: Array
 },
 emits:['myButton'],
 methods: {
    send() {
      this.$emit("myButton");
    }
  }
})
</script>

<template>
    <button v-bind:disabled="data.includes(0)" 
            v-on:click="send"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Add PC
    </button>
</template>

<style>

</style>