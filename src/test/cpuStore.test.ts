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
  
})