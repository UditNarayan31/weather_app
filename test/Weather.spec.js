import { shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import WeatherApp from '@/components/WeatherApp'
import Vue from 'vue'
Vue.use(Vuetify)
jest.mock('axios', () => ({
  get: () => Promise.resolve('weather')
}));
describe("WeatherApp.vue", () => {
  
  it("mocking weather api", () => {
    var wrapper = shallowMount(WeatherApp);
    wrapper.find('#inputSearch').trigger('keypress')
     wrapper.vm.$nextTick(() => {
       expect(wrapper.text()).toBe('weather')
     })
  });
});