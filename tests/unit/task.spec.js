import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import task from "@/components/task.vue";
describe("todolist.vue", () => {
  const wrapper = shallowMount(task, {
    propsData: {
      taskName: "write tests",
      status: "undone"
    }
  });
  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.destroy();
  });
  it("checks for the available fields", () => {
    expect(wrapper.name()).toBe("task");
    expect(wrapper.findAll("div")[0]).to.include("henry");
  });
});
