"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const applyPlayerTwoClasses = element => {
  element.parent().addClass('blueTint');
  (0, _jquery.default)('.portraits').removeClass('playerTwoCursor');
  (0, _jquery.default)('.portraits').addClass('playerOneCursor');
};

var _default = applyPlayerTwoClasses;
exports.default = _default;