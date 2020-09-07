import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import navbar from "../../src/components/nav.vue";
describe("todolist.vue", async () => {
  const wrapper = shallowMount(navbar);
  it("should be named navbar", () => {
    expect(wrapper.name()).to.equal("navbar");
  });
  await wrapper.setData({ name: "Henry Eze" });

  it("name property of data to be Henry Eze", () => {
    expect(wrapper.vm.name).to.equal("Henry Eze");
  });
});
