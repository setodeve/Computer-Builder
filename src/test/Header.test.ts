import { mount } from '@vue/test-utils'
import HeaderComponent from '../components/Header.vue'

test('displays message', () => {
  const wrapper = mount(HeaderComponent)
  expect(wrapper.html()).toContain('Build Your Own PC')
})
