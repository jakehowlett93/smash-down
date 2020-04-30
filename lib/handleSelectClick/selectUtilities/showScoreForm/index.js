"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const showScoreForm = selectedElements => {
  if (selectedElements.length % 2 === 0 && selectedElements.length > 0) {
    (0, _jquery.default)('.form input').attr('disabled', false);
  } else {
    (0, _jquery.default)('.form input').attr('disabled', true);
  }
};

var _default = showScoreForm;
exports.default = _default;