import { mount,flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { beforeEach,describe,expect,test,vitest } from "vitest"
import CpuGpuComponent from '../components/Contents/CPU_GPU.vue'
import { cpuStore } from '../stores/cpu'

describe('CPU_GPU_Component', () => {
  let wrapper :any = null ;

  beforeEach(() => {
    wrapper = mount(CpuGpuComponent, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vitest.fn
        })]
      },
      props: {
        type: 'CPU',
        step: '1'
      }
    })
  })

  test('Loadin is true', async () => {
    const store = await cpuStore()
    store.$state.Loading = await true
    await flushPromises()
    expect(store.trimData).toHaveBeenCalledTimes(2)
    expect(wrapper.html()).toContain('step1:Select your CPU')
  })

  test('Loading is false', () => {
    const store = cpuStore()
    expect(wrapper.html()).toContain('loading........')
  })

  test('props data', () => {
    const store = cpuStore()
    expect(wrapper.props('type')).toBe('CPU')
    expect(wrapper.props('step')).toBe('1')
  })
  
})