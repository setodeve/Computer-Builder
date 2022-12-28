import { defineStore } from 'pinia'

interface CpuState {
  Type: string;
  "Part Number": string;
  Brand: string;
  Model: string;
  Rank: number;
  Benchmark: number;
}

export const cpuStore = defineStore('cpu',{
  state: () => ({
    brand: "-",
    model: "-",
    fetchdata: {},
    cpudata: <CpuState>{},
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
      .then(data => this.fetchdata = data)
      .then(() => this.Loading = true )
    },
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
     * Brandで選択されたの要素だけデータを抽出する
     * @param {any} array 配列データ
     * @return {stirng} 抽出した配列
     */
    extractBrandData(array:any){
      return array.filter((w:any) =>w.Brand==this.$state.brand)
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
        cpudata: selected
      });
    }
  },
})

