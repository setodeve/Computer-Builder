import { setActivePinia, createPinia } from 'pinia'
import { cpuStore } from '../stores/cpu'
import 'cross-fetch/polyfill'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('cpuSore.brand is - ?', () => {
    const store = cpuStore() ;
    expect(store.$state.brand).toBe('-') ;
  })

  test('can get data', async() => {
    const store = cpuStore() ;
    expect(store.$state.Loading).toBeFalsy() ;
    await store.getData("https://api.recursionist.io/builder/computers?type=cpu");
    expect(store.$state.Loading).toBeTruthy() ;
  })
  
  test('trim data', async() => {
    const store = cpuStore() ;
    await store.getData("https://api.recursionist.io/builder/computers?type=cpu");
    expect(store.$state.fetchdata).toHaveLength(100) ;
    const rtnArray = store.trimData(store.$state.fetchdata,"Brand");
    expect(rtnArray).toHaveLength(2) ;
  })

  test('extract data cpu', async() => {
    const store = cpuStore() ;
    await store.getData("https://api.recursionist.io/builder/computers?type=cpu");
    expect(store.$state.fetchdata).toHaveLength(100) ;
    store.$state.brand = "Intel";
    const rtnArray = store.extractBrandData(store.$state.fetchdata);
    expect(rtnArray).toHaveLength(79) ;
  })

  test('set data', () => {
    const store = cpuStore() ;
    const eventInput = {
      target:{
        value:"Intel"
      }
    }
    store.setBrandData(eventInput);
    expect(store.$state.brand).toBe("Intel") ;
  })
})