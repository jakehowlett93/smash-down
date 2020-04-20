"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

var _handleSelectedElement = _interopRequireDefault(require("./handleSelectedElement"));

var _unselectElement = _interopRequireDefault(require("./unselectElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handleSelectClick = (event, selectedElements) => {
  const element = (0, _jquery.default)(event.target);

  if (!element.hasClass('selected')) {
    (0, _handleSelectedElement.default)(selectedElements, element);
  } else {
    (0, _unselectElement.default)(selectedElements, element);
  }
};

var _default = handleSelectClick;
exports.default = _default;