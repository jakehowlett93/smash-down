"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handleScoreClick = _interopRequireDefault(require("./handleScoreClick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addClickEvent = (playerElement, player, playerScore, playerButton, totalCharacters) => {
  playerButton.click(() => {
    playerScore++;
    (0, _handleScoreClick.default)(playerElement, player, playerScore, totalCharacters);
  });
};

var _default = addClickEvent;
exports.default = _default;