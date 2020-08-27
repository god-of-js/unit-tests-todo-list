"use strict";

var _testUtils = require("@vue/test-utils");

var _chai = require("chai");

var _task = _interopRequireDefault(require("@/components/task.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("task.vue", function () {
  var wrapper;
  beforeEach(function () {
    //mounting the component for each test
    wrapper = (0, _testUtils.shallowMount)(_task["default"], {
      propsData: {
        //setting dummy data for props
        taskName: 'Henry Eze'
      },
      data: function data() {
        //setting dummy data for the data 
        return {
          show: true
        };
      }
    });
  }); //   Destroying the wrapper so it could be re-initialized for every new test

  afterEach(function () {
    wrapper.destroy();
  });
  it("should have its name as task", function () {
    (0, _chai.expect)(wrapper.name()).to.be("task");
  });
  it("Status check", function () {
    wrapper.setProps({
      name: 'Test Task',
      status: false
    });
    (0, _chai.expect)(wrapper.vm.name).to.be('Test Task');

    if (wrapper.vm.status === false) {
      (0, _chai.expect)(wrapper.find('.status').text()).to.be('Unfinished');
    } else {
      (0, _chai.expect)(wrapper.find('.status').text()).to.be('Complete');
    }
  });
  it('delete should work', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(wrapper.find('button').trigger('click'));

          case 2:
            //  find returns the wrapper of the first node matching the selector
            //  findall returns all the wrappers of the node matching the selector
            wrapper.vm.$emit('deleteTask', true);
            console.log(wrapper.emitted().deleteTask);
            (0, _chai.expect)(wrapper.emitted().deleteTask).to.be(true);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});