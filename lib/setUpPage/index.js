"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

var _createPortraitElements = _interopRequireDefault(require("../createPortraitElements"));

var _addClickEvent = _interopRequireDefault(require("../addClickEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setUpPage = () => {
  const totalCharacters = 80;
  (0, _createPortraitElements.default)(totalCharacters);
  const playerOne = 'player 1';
  const playerTwo = 'player 2';
  let playerOneScore = 0;
  let playerTwoScore = 0;
  const playerOneElement = (0, _jquery.default)('#playerOneScore');
  const playerTwoElement = (0, _jquery.default)('#playerTwoScore');
  playerOneElement.append(playerOneScore);
  playerTwoElement.append(playerTwoScore);
  const playerOneButton = (0, _jquery.default)('#playerOneButton');
  const playerTwoButton = (0, _jquery.default)('#playerTwoButton');
  (0, _addClickEvent.default)(playerOneElement, playerOne, playerOneScore, playerOneButton, totalCharacters);
  (0, _addClickEvent.default)(playerTwoElement, playerTwo, playerTwoScore, playerTwoButton, totalCharacters);
};

var _default = setUpPage;
exports.default = _default;