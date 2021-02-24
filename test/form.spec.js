import { mount } from "@vue/test-utils"
import Form from "@/components/Form.vue"
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe("Form", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = mount(Form)

    await wrapper.find("[data-username]").setValue("alice")
    await wrapper.find("form").trigger("submit.prevent")

    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.")
  })
})