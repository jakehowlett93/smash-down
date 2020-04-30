"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("handleScoreForm", () => {
  document.body.innerHTML = '<div class="form">' + '<input class="disabled">';
  "</div>";
  let selectedElements = ["mock"];
  describe("when selectedElements is odd", () => {
    it("the input element should have the class disabled", () => {
      (0, _index.default)(selectedElements);
      expect((0, _jquery.default)(".form input").hasClass("disabled")).toBeTruthy();
    });
  });
  describe("when selectedElements is even and above 0", () => {
    it("should remove the disabled class from the input element", () => {
      selectedElements.push("mock");
      (0, _index.default)(selectedElements);
      expect((0, _jquery.default)(".form input").hasClass("disabled")).toBeFalsy();
    });
  });
});