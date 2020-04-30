"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _applyPlayerOneClasses = _interopRequireDefault(require("../selectUtilities/applyPlayerOneClasses"));

var _handleScoreForm = _interopRequireDefault(require("../selectUtilities/handleScoreForm"));

var _applyPlayerTwoClasses = _interopRequireDefault(require("../selectUtilities/applyPlayerTwoClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handleSelectedElement = (selectedElements, element) => {
  if (selectedElements.length % 2 === 0) {
    (0, _applyPlayerOneClasses.default)(element);
  } else {
    (0, _applyPlayerTwoClasses.default)(element);
  }

  element.addClass("selected");
  selectedElements.push(1);
  (0, _handleScoreForm.default)(selectedElements);
};

var _default = handleSelectedElement;
exports.default = _default;