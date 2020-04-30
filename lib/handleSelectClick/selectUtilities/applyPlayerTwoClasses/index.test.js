"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("applyPlayerTwoClasses", () => {
  document.body.innerHTML = '<div class="parent">' + '   <div class="portraits playerTwoCursor"><div>';
  "</div>";
  const portraits = (0, _jquery.default)(".portraits");
  beforeEach(() => {
    (0, _index.default)(portraits);
  });
  it("should add blueTint to the parent element", () => {
    expect((0, _jquery.default)(".parent").hasClass("blueTint")).toBeTruthy();
  });
  it("should remove the playerTwoCursor class from the portraits element", () => {
    expect(portraits.hasClass("playerTwoCursor")).toBeFalsy();
  });
  it("should add the playerOneCursor class to the portraits element", () => {
    expect(portraits.hasClass("playerOneCursor")).toBeTruthy();
  });
});