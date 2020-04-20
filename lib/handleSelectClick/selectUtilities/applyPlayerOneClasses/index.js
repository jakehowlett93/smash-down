"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const applyPlayerOneClasses = element => {
  element.parent().addClass('redTint');
  (0, _jquery.default)('.portraits').removeClass('playerOneCursor');
  (0, _jquery.default)('.portraits').addClass('playerTwoCursor');
};

var _default = applyPlayerOneClasses;
exports.default = _default;