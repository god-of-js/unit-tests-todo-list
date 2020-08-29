"use strict";

var _testUtils = require("@vue/test-utils");

var _chai = require("chai");

var _nav = _interopRequireDefault(require("../../src/components/nav.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('todolist.vue', function _callee() {
  var wrapper;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          wrapper = (0, _testUtils.shallowMount)(_nav["default"]);
          it('should be named navbar', function () {
            (0, _chai.expect)(wrapper.name()).to.equal('navbar');
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(wrapper.setData({
            name: 'Henry Eze'
          }));

        case 4:
          it('name property of data to be Henry Eze', function () {
            (0, _chai.expect)(wrapper.vm.name).to.equal('Henry Eze');
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});