"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("unselectElement", () => {
  document.body.innerHTML = '<div class="parent redTint blueTint">' + '   <div class="element selected"></div>' + '   <div class="portraits"></div>' + "</div>";
  const element = (0, _jquery.default)(".element");
  const parent = (0, _jquery.default)(".parent");
  const portraits = (0, _jquery.default)(".portraits");
  describe("when called it should remove tints", () => {
    let selectedElements;
    beforeEach(() => {
      selectedElements = [1, 1];
      (0, _index.default)(selectedElements, element);
    });
    it("should remove the redTint class from parent", () => {
      expect(parent.hasClass("redTint")).toBeFalsy();
    });
    it("should remove the blueTint calss from parent", () => {
      expect(parent.hasClass("blueTint")).toBeFalsy();
    });
    it("should pop an item from selected elements", () => {
      expect(selectedElements.length).toEqual(1);
    });
  });
  describe("when called it should swap the cursor classes", () => {
    describe("when its player ones turn (even)", () => {
      beforeEach(() => {
        //remember one item is removed
        let selectedElements = [1, 1, 1];
        (0, _index.default)(selectedElements, element);
      });
      it("should remove the playerTwoCursor class", () => {
        expect(portraits.hasClass("playerTwoCursor")).toBeFalsy();
      });
      it("should  add the playerOneCursor class", () => {
        expect(portraits.hasClass("playerOneCursor")).toBeTruthy();
      });
    });
    describe("when its player two turn (odd)", () => {
      beforeEach(() => {
        //remember one item is removed
        let selectedElements = [1, 1];
        (0, _index.default)(selectedElements, element);
      });
      it("should remove the playerOneCursor class", () => {
        expect(portraits.hasClass("playerOneCursor")).toBeFalsy();
      });
      it("should  add the playerTwoCursor class", () => {
        expect(portraits.hasClass("playerTwoCursor")).toBeTruthy();
      });
    });
  });
});