import handleScoreClick from "./handleScoreClick";

const addClickEvent = (
  playerElement,
  player,
  playerScore,
  playerButton,
  totalCharacters
) => {
  playerButton.click(() => {
    playerScore++;
    handleScoreClick(playerElement, player, playerScore, totalCharacters);
  });
};

export default addClickEvent;
