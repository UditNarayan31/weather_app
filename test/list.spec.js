import {shallowMount} from '@vue/test-utils'
import List from '@/components/List'
import flushPromises from 'flush-promises'

jest.mock("axios", () => ({
    get: () => Promise.resolve({data: [{val:1}]})
}));

describe('List.vue', () => {
    it("mocking api", async () => {
      var wrapper = shallowMount(List)
      await flushPromises();
      expect(wrapper.vm.posts.length).toBe(1);
    })
})