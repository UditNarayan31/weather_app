import { shallowMount } from '@vue/test-utils'
import WeatherApp from '@/components/WeatherApp'
jest.mock('axios', () => ({
  get: Promise.resolve('weather')
}))

it('fetches async when a button is clicked', () => {
  const wrapper = shallowMount(WeatherApp)
  wrapper.find('v-text-field').trigger('keypress')
  wrapper.vm.$nextTick(() => {
    expect(wrapper.text()).toBe('weather')
    done()
  })
})