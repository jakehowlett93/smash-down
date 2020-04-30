"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _createPortraitElements = _interopRequireDefault(require("../createPortraitElements"));

var _addClickEvent = _interopRequireDefault(require("../addClickEvent"));

var _setUpPage = _interopRequireDefault(require("../setUpPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock("../createPortraitElements");
jest.mock("../addClickEvent");
describe("setUpPage", () => {
  document.body.innerHTML = '<div id="playerOneScore"></div>' + '<div id="playerTwoScore"></div>';
  const playerOneElement = (0, _jquery.default)("#playerOneScore");
  const playerOne = "player 1";
  const playerOneScore = 0;
  const playerOneButton = (0, _jquery.default)("#playerOneButton");
  const totalCharacters = 80;
  beforeEach(() => {
    _addClickEvent.default.mockClear();

    (0, _setUpPage.default)();
  });
  it("should call createPortraitElements", () => {
    expect(_createPortraitElements.default).toHaveBeenCalledWith(80);
  });
  it("should append player one score", () => {
    expect((0, _jquery.default)("#playerOneScore").children()).toBeTruthy();
  });
  it("should append player two score", () => {
    expect((0, _jquery.default)("#playerTwoScore").children()).toBeTruthy();
  });
  it("should call addClickEvent twice", () => {
    expect(_addClickEvent.default).toHaveBeenCalledTimes(2);
  });
  it("should call addClickEvent with", () => {
    expect(_addClickEvent.default).toHaveBeenCalledWith(playerOneElement, playerOne, playerOneScore, playerOneButton, totalCharacters);
  });
});