"use strict";

var _index = _interopRequireDefault(require("./index"));

var _handleScoreClick = _interopRequireDefault(require("./handleScoreClick"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock("./handleScoreClick");
describe("addClickEvent", () => {
  document.body.innerHTML = "<div class='playerElement'>" + "  <input type='button' class='playerButton' />" + "</div>";
  const playerElement = (0, _jquery.default)(".playerElement:first");
  const player = "mock-player";
  let playerScore = 0;
  const playerButton = (0, _jquery.default)(".playerButton");
  const totalCharacters = 80;
  beforeEach(() => {
    (0, _index.default)(playerElement, player, playerScore, playerButton, totalCharacters);
    playerButton.trigger("click");
  });
  it("should call handleScoreClick", () => {
    expect(_handleScoreClick.default).toHaveBeenCalled();
  });
});