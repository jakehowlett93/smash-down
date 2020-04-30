"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handleScoreClick = (playerElement, player, playerScore, totalCharacters) => {
  playerElement.empty();
  playerElement.append(playerScore);
  (0, _jquery.default)('.form input').attr('disabled', true).addClass('disabled');
  const scorePlayerWinsAt = totalCharacters / 2;

  if (playerScore === scorePlayerWinsAt - 5) {
    alert(player + ' is 5 wins from winning the smash down');
  } else if (playerScore === scorePlayerWinsAt - 1) {
    alert(player + ' is 1 win from winning the smash down');
  } else if (playerScore >= scorePlayerWinsAt) {
    alert(player + ' has won!');
  }
};

var _default = handleScoreClick;
exports.default = _default;