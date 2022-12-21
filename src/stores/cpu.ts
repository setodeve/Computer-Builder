import { defineStore } from 'pinia'

export const cpuStore = defineStore('cpu',{
  state: () => ({
    brand: "test",
    model: "",
    fetchdata: {},
    Loading:false
  }),
  actions:{
    setData(brand:string, model:string){
      this.brand = brand
      this.model = model
    },
    getData(url:string){
      return fetch(url)
      .then(data => data.json())
      .then(data => this.fetchdata = data)
      .then(() => this.Loading = true )
    },
  }
})
