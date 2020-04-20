"use strict";

var _index = _interopRequireDefault(require("./index"));

var _handleScoreClick = _interopRequireDefault(require("./handleScoreClick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('./handleScoreClick'); //mock handleScoreClick

describe('addClickEvent', () => {
  const playerElement = document.createElement('div');
  const player = 'mock-player';
  const playerScore = 0;
  const playerButton = document.createElement('button');
  const totalCharacters = 80;
  beforeEach(() => {
    (0, _index.default)(playerElement, player, playerScore, playerButton, totalCharacters);
  });
  it('should add a click function to the playerElement', () => {
    playerButton.click();
    expect(playerScore).toEqual(1);
  });
  it('should call handleScoreClick with the correct properties');
});