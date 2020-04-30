"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('createPortraitElements', () => {
  const totalCharacters = 1;
  document.body.innerHTML = '<div class="portraits"></div>';
  const portraits = (0, _jquery.default)('.portraits:first');
  beforeEach(() => {
    (0, _index.default)(totalCharacters);
  });
  it('should add the table class to portraits', () => {
    expect(portraits.hasClass('table')).toBeTruthy();
  });
  it('should append two children to portraits', () => {
    expect(portraits.children().length).toEqual(2);
  });
  it('should add the image class to the image element', () => {
    expect((0, _jquery.default)('.image')).toBeTruthy();
  });
  it('should add the rowSpacing class to the imageDiv', () => {
    expect((0, _jquery.default)('.rowSpacing')).toBeTruthy();
  });
});