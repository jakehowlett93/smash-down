"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _index = _interopRequireDefault(require("./index"));

var _handleSelectedElement = _interopRequireDefault(require("./handleSelectedElement"));

var _unselectElement = _interopRequireDefault(require("./unselectElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock("./handleSelectedElement");
jest.mock("./unselectElement");
describe("handleSelectClick", () => {
  document.body.innerHTML = '<div class="noSelect"></div>' + '<div class="selected"></div>';
  const noSelectEvent = {
    target: (0, _jquery.default)(".noSelect")
  };
  const selectEvent = {
    target: (0, _jquery.default)(".selected")
  };
  let selectedElements = [];
  describe("if element doesnt have the class select", () => {
    it("should call handleSelectedElement", () => {
      (0, _index.default)(noSelectEvent, selectedElements);
      expect(_handleSelectedElement.default).toHaveBeenCalled();
    });
  });
  describe("if element does have the class select", () => {
    it("should call unselectElement", () => {
      (0, _index.default)(selectEvent, selectedElements);
      expect(_unselectElement.default).toHaveBeenCalled();
    });
  });
});