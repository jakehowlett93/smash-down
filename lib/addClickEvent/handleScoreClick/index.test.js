"use strict";

var _index = _interopRequireDefault(require("./index"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('handleScoreClick', () => {
  document.body.innerHTML = '<div class="playerElement">hi</div>' + '<form class="form" disabled="false">' + '   <input></input>' + '</form>';
  const playerElement = (0, _jquery.default)('.playerElement:first');
  const player = 'mock-player';
  let playerScore = 1;
  const totalCharacters = 80;
  window.alert = jest.fn();
  beforeEach(() => {
    window.alert.mockClear();
  });
  describe('when called', () => {
    beforeEach(() => {
      (0, _index.default)(playerElement, player, playerScore, totalCharacters);
    });
    it('should empty the div and append playerScore to the playerDiv', () => {
      expect((0, _jquery.default)('.playerElement').html()).toEqual("1");
    });
    it('should add the class disabled to form elements', () => {
      expect((0, _jquery.default)('.form input').hasClass('disabled')).toBeTruthy();
    });
  });
  describe('when playerscore is 5 from the winning score', () => {
    it('should alert the user', () => {
      playerScore = 35;
      (0, _index.default)(playerElement, player, playerScore, totalCharacters);
      expect(alert).toHaveBeenCalled();
    });
  });
  describe('when playerScore is 1 from the winning score', () => {
    it('should alert the user', () => {
      playerScore = 39;
      (0, _index.default)(playerElement, player, playerScore, totalCharacters);
      expect(alert).toHaveBeenCalled();
    });
  });
  describe('when playerScore is equal to the winning score', () => {
    it('should alert the user', () => {
      playerScore = 40;
      (0, _index.default)(playerElement, player, playerScore, totalCharacters);
      expect(alert).toHaveBeenCalled();
    });
  });
});