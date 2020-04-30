"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const unselectElement = (selectedElements, element) => {
  element.parent().removeClass("redTint blueTint");
  element.removeClass("selected");
  selectedElements.pop();

  if (selectedElements.length % 2 === 0) {
    (0, _jquery.default)(".portraits").removeClass("playerTwoCursor");
    (0, _jquery.default)(".portraits").addClass("playerOneCursor");
  } else {
    (0, _jquery.default)(".portraits").removeClass("playerOneCursor");
    (0, _jquery.default)(".portraits").addClass("playerTwoCursor");
  }
};

var _default = unselectElement;
exports.default = _default;