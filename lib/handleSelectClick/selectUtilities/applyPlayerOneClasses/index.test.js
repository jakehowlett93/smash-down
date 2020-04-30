"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("applyPlayerTwoClasses", () => {
  document.body.innerHTML = '<div class="parent">' + '   <div class="portraits playerOneCursor"><div>';
  "</div>";
  const portraits = (0, _jquery.default)(".portraits");
  beforeEach(() => {
    (0, _index.default)(portraits);
  });
  it("should add redTint to the parent element", () => {
    expect((0, _jquery.default)(".parent").hasClass("redTint")).toBeTruthy();
  });
  it("should remove the playerOneCursor class from the portraits element", () => {
    expect(portraits.hasClass("playerOneCursor")).toBeFalsy();
  });
  it("should add the playerTeoCursor class to the portraits element", () => {
    expect(portraits.hasClass("playerTwoCursor")).toBeTruthy();
  });
});