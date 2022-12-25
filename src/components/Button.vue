<template>
    <button v-bind:disabled="data.includes(0)" v-on:click="send">Add PC</button>
</template>

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

<style>

</style>