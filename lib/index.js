"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _createPortraitElements = _interopRequireDefault(require("./createPortraitElements"));

var _addClickEvent = _interopRequireDefault(require("./addClickEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery.default)(document).ready(function () {
  const totalCharacters = 80;
  (0, _createPortraitElements.default)(totalCharacters);
  const playerOne = 'player 1';
  const playerTwo = 'player 2';
  let playerOneScore = 0;
  let playerTwoScore = 0;
  const playerOneElement = (0, _jquery.default)('#playerOneScore');
  playerOneElement.append(playerOneScore);
  const playerTwoElement = (0, _jquery.default)('#playerTwoScore');
  playerTwoElement.append(playerTwoScore);
  const playerOneButton = (0, _jquery.default)('#playerOneButton');
  const playerTwoButton = (0, _jquery.default)('#playerTwoButton');
  (0, _addClickEvent.default)(playerOneElement, playerOne, playerOneScore, playerOneButton, totalCharacters);
  (0, _addClickEvent.default)(playerTwoElement, playerTwo, playerTwoScore, playerTwoButton, totalCharacters);
});