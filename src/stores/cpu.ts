import { defineStore } from 'pinia'

export const cpuStore = defineStore('cpu',{
  state: () => ({
    brand: "test",
    model: ""
  }),
  actions:{
    setData(brand:string,model:string){
      this.brand = brand
      this.model = model
    }
  }
})
