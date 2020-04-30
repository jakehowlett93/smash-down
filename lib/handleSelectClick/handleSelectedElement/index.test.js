"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _index = _interopRequireDefault(require("./index"));

var _applyPlayerOneClasses = _interopRequireDefault(require("../selectUtilities/applyPlayerOneClasses"));

var _applyPlayerTwoClasses = _interopRequireDefault(require("../selectUtilities/applyPlayerTwoClasses"));

var _handleScoreForm = _interopRequireDefault(require("../selectUtilities/handleScoreForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock("../selectUtilities/applyPlayerOneClasses");
jest.mock("../selectUtilities/applyPlayerTwoClasses");
jest.mock("../selectUtilities/handleScoreForm");
describe("handleSelectedElement", () => {
  document.body.innerHTML = "<div class='element'></div>";
  const element = (0, _jquery.default)(".element");
  let selectedElements = [1, 1];
  describe("when its player ones turn (even)", () => {
    beforeEach(() => {
      (0, _index.default)(selectedElements, element);
    });
    it("should call applyPlayerOneClasses", () => {
      expect(_applyPlayerOneClasses.default).toHaveBeenCalled();
    });
  });
  describe("when its player twos turn (odd)", () => {
    beforeEach(() => {
      selectedElements = [1, 1, 1];
      (0, _index.default)(selectedElements, element);
    });
    it("should call applyPlayerTwoClasses", () => {
      expect(_applyPlayerTwoClasses.default).toHaveBeenCalled();
    });
  });
  describe("when called", () => {
    beforeEach(() => {
      selectedElements = [1, 1];
      (0, _index.default)(selectedElements, element);
    });
    it("should add the selected class to element", () => {
      expect(element.hasClass("selected")).toBeTruthy();
    });
    it("should add a 1 to the selectedElements array", () => {
      expect(selectedElements.length).toEqual(3);
    });
    it("should call handleScoreForm", () => {
      expect(_handleScoreForm.default).toHaveBeenCalled();
    });
  });
});