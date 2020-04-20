"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('handleScoreClick', () => {
  const playerElement = document.createElement('div');
  const player = 'mock-player';
  const playerScore = 0;
  const totalCharacters = 80;
  beforeEach(() => {
    (0, _index.default)(playerElement, player, playerScore, totalCharacters);
  });
  describe('when called', () => {
    it('should empty the player div', () => {});
    it('should append playerScore to the playerDiv');
  });
  describe('when playerscore is 5 from the winning score', () => {
    it('should alert the user', () => {});
  });
  describe('when playerScore is 1 from the winning score', () => {
    it('should alert the user', () => {});
  });
  describe('when playerScore is equal to the winning score', () => {
    it('should alert the user', () => {});
  });
});