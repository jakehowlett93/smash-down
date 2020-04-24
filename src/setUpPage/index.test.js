import $ from "jquery";
import createPortraitElements from "../createPortraitElements";
import addClickEvent from "../addClickEvent";
import setUpPage from "../setUpPage";

jest.mock("../createPortraitElements");
jest.mock("../addClickEvent");

describe("setUpPage", () => {
  document.body.innerHTML =
    '<div id="playerOneScore"></div>' + '<div id="playerTwoScore"></div>';
  const playerOneElement = $("#playerOneScore");
  const playerOne = "player 1";
  const playerOneScore = 0;
  const playerOneButton = $("#playerOneButton");
  const totalCharacters = 80;

  beforeEach(() => {
    addClickEvent.mockClear();
    setUpPage();
  });

  it("should call createPortraitElements", () => {
    expect(createPortraitElements).toHaveBeenCalledWith(80);
  });
  it("should append player one score", () => {
    expect($("#playerOneScore").children()).toBeTruthy();
  });
  it("should append player two score", () => {
    expect($("#playerTwoScore").children()).toBeTruthy();
  });
  it("should call addClickEvent twice", () => {
    expect(addClickEvent).toHaveBeenCalledTimes(2);
  });
  it("should call addClickEvent with", () => {
    expect(addClickEvent).toHaveBeenCalledWith(
      playerOneElement,
      playerOne,
      playerOneScore,
      playerOneButton,
      totalCharacters
    );
  });
});
