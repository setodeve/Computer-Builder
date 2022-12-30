import { defineStore } from 'pinia'

interface StorageState {
  Type: string;
  "Part Number": string;
  Brand: string;
  Model: string;
  Rank: number;
  Benchmark: number;
}

export const storageStore = defineStore('storage',{
  state: () => ({
    storage :"-",
    size :"-",
    brand: "-",
    model: "-",
    fetchdata: {},
    storagedata: <StorageState>{},
    Loading:false
  }),
  actions:{
    /**
     * urlをfetchし、fetchしたデータをセットする
     * @param {string} url fetch先のURL
     */
    async getData(url:string){
      await fetch(url)
      .then(data => data.json())
      .then(data => this.fetchdata = this.addSizeData(data))
      .then(() => this.Loading = true )
    },
    /**
     * イベントデータをセットする
     * urlをfetchし、fetchしたデータをセットする
     * @param {string} e イベントデータ
     */
    getStorageData(e:any){
      this.setStorageData(e)
      if(e.target.value=="HDD"){
        this.getData("https://api.recursionist.io/builder/computers?type=hdd")
      }else{
        this.getData("https://api.recursionist.io/builder/computers?type=ssd")
      }
    },
    /**
     * Storageの大きさを連想配列に追加する
     * @param {any} array 配列データ
     * @return {stirng} トリミングした配列
     */
      addSizeData(array:any){
        return array.filter((item:any) => {
          const size = item.Model.match(/\d+(?:TB|GB|MB)/);
          item.Size = size[0];
          return item;
        })
      }
      ,
    /**
     * strの要素だけデータをトリミングする
     * @param {any} array 配列データ
     * @param {string} str BrandやModelなどの文字列
     * @return {stirng} トリミングした配列
     */
    trimData(array:any,str:string){
      return array.filter((item:any, index:any, self:any) => {
        const nameList = self.map((item:any) => item[str]);
        if (nameList.indexOf(item[str]) == index) return item;
      })
    },
    /**
     * SizeとBrandで選択されたの要素だけデータを抽出する
     * @param {any} array 配列データ
     * @return {stirng} 抽出した配列
     */
    extractBrandData(array:any){
      return array.filter((w:any)=>w.Brand==this.$state.brand)
                  .filter((w:any)=>w.Size==this.$state.size)
    },
    /**
     * Storageで選択された値をstate.storageにセットする
     * @param {any} e イベントデータ
     */
    setStorageData(e:any){
      this.$patch({storage: e.target.value});
    },
    /**
     * Sizeで選択された値をstate.sizeにセットする
     * @param {any} e イベントデータ
     */
    setSizeData(e:any){
      this.$patch({size: e.target.value});
    },
    /**
     * Brandで選択された値をstate.brandにセットする
     * @param {any} e イベントデータ
     */
    setBrandData(e:any){
      this.$patch({brand: e.target.value});
    },
    /**
     * Modelで選択された値をstate.modelにセットする
     * @param {any} e イベントデータ
     * @param {object} selected 選択されたデータ
     */
    setModelData(e:any,selected:Object){
      this.$patch({
        model: e.target.value,
        storagedata: selected
      });
    }
  },
})

