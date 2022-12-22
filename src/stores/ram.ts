import { defineStore } from 'pinia'

export const ramStore = defineStore('ram',{
  state: () => ({
    size :"-",
    brand: "-",
    model: "-",
    fetchdata: {},
    ramdata: {},
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
      .then(data => this.fetchdata = this.trimRamSizeData(data))
      .then(() => this.Loading = true )
    },
    /**
     * メモリの数とメモリの大きさを連想配列に追加する
     * @param {any} array 配列データ
     * @return {stirng} トリミングした配列
     */
      trimRamSizeData(array:any){
        return array.filter((item) => {
          const position = item.Model.lastIndexOf(" ");
          item.Size = item.Model.substring(position+1);
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

