import { defineStore } from 'pinia'

interface RamState {
  Type: string;
  "Part Number": string;
  Brand: string;
  Model: string;
  Rank: number;
  Benchmark: number;
}

export const ramStore = defineStore('ram',{
  state: () => ({
    size :"-",
    brand: "-",
    model: "-",
    fetchdata: {},
    ramdata: <RamState>{},
    Loading:false
  }),
  actions:{
    /**
     * urlをfetchし、fetchしたデータをセットする
     * @param {string} url fetch先のURL
     */
    getData(url:string){
      fetch(url)
      .then(data => data.json())
      .then(data => this.fetchdata = this.addSizeData(data))
      .then(() => this.Loading = true )
    },
    /**
     * メモリの数とメモリの大きさを連想配列に追加する
     * @param {any} array 配列データ
     * @return {stirng} トリミングした配列
     */
      addSizeData(array:any){
        return array.filter((item) => {
          const size = item.Model.match(/\d+x\d+(?:GB)/);
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
      return array.filter((item, index, self) => {
        const nameList = self.map(item => item[str]);
        if (nameList.indexOf(item[str]) == index) return item;
      })
    },
    /**
     * SizeとBrandで選択されたの要素だけデータを抽出する
     * @param {any} array 配列データ
     * @return {stirng} 抽出した配列
     */
    extractBrandData(array:any){
      return array.filter(w=>w.Brand==this.$state.brand)
                  .filter(w=>w.Size==this.$state.size)
    },
    /**
     * Sizeで選択された値をstate.sizeにセットする
     * @param {object} e イベントデータ
     */
    setSizeData(e){
      this.$patch({size: e.target.value});
    },
    /**
     * Brandで選択された値をstate.brandにセットする
     * @param {object} e イベントデータ
     */
    setBrandData(e){
      this.$patch({brand: e.target.value});
    },
    /**
     * Modelで選択された値をstate.modelにセットする
     * @param {object} e イベントデータ
     * @param {object} selected 選択されたデータ
     */
    setModelData(e,selected){
      this.$patch({
        model: e.target.value,
        ramdata: selected
      });
    }
  },
})

