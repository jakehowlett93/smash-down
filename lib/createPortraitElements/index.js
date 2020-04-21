"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

var _handleSelectClick = _interopRequireDefault(require("../handleSelectClick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createPortraitElements = totalCharacters => {
  let selectedElements = [];
  const portraits = (0, _jquery.default)('.portraits:first');
  portraits.addClass('table playerOneCursor');

  for (let element = 1; element < totalCharacters + 1; element++) {
    let image = (0, _jquery.default)('<img>', {
      id: element,
      src: './assets/portraits/' + element + '.png',
      class: 'image'
    });
    image.click(event => {
      (0, _handleSelectClick.default)(event, selectedElements);
    });
    const imageDiv = (0, _jquery.default)('<div></div>');
    imageDiv.append(image);
    imageDiv.addClass('rowSpacing');
    portraits.append(imageDiv);
  }
};

var _default = createPortraitElements;
exports.default = _default;