import { mount } from '@vue/test-utils'
import Home from '@/views/HomePage.vue'

describe('HomePage.vue', () => {
  it('renders home view', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toMatch('Home page')
  })
})
