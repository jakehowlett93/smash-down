import addClickEvent from "./index";
import handleScoreClick from "./handleScoreClick";
import $ from "jquery";

jest.mock("./handleScoreClick");

describe("addClickEvent", () => {
  document.body.innerHTML =
    "<div class='playerElement'>" +
    "  <input type='button' class='playerButton' />" +
    "</div>";

  const playerElement = $(".playerElement:first");
  const player = "mock-player";
  let playerScore = 0;
  const playerButton = $(".playerButton");
  const totalCharacters = 80;

  beforeEach(() => {
    addClickEvent(
      playerElement,
      player,
      playerScore,
      playerButton,
      totalCharacters
    );
    playerButton.trigger("click");
  });
  it("should call handleScoreClick", () => {
    expect(handleScoreClick).toHaveBeenCalled();
  });
});
