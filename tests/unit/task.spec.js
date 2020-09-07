import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import task from "../../src/components/task.vue";
describe("task.vue", () => {
  let wrapper;
  beforeEach(() => {
    //mounting the component for each test
    wrapper = shallowMount(task, {
      propsData: {
        //setting dummy data for props
        name: "Henry Eze"
      },
      data() {
        //setting dummy data for the data
        return {
          show: true
        };
      }
    });
  });
  //   Destroying the wrapper so it could be re-initialized for every new test
  afterEach(() => {
    wrapper.destroy();
  });
  it("should have its name as task", () => {
    console.log(wrapper.name());
    expect(wrapper.name()).to.equal("task");
  });
  it("Status check", () => {
    wrapper.setProps({
      name: "Test Task",
      status: false
    });
    expect(wrapper.vm.name).to.equal("Test Task");
    if (wrapper.vm.status === false) {
      expect(wrapper.find(".status").text()).to.equal("Unfinished");
    } else {
      expect(wrapper.find(".status").text()).to.equal("Complete");
    }
  });
  it("delete shoul work", async () => {
    await wrapper.find("button").trigger("click");
    //  find returns the wrapper of the first node matching the selector
    //  findall returns all the wrappers of the node matching the selector
    wrapper.vm.$emit("event", true);
    expect(wrapper.emitted().event[0][0]).to.equal(true);
  });
});
