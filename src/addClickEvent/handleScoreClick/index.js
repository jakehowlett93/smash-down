import $ from "jquery";

const handleScoreClick = (
  playerElement,
  player,
  playerScore,
  totalCharacters
) => {
  playerElement.empty();
  playerElement.append(playerScore);
  $(".form input").attr("disabled", true).addClass("disabled");
  const scorePlayerWinsAt = totalCharacters / 2;
  if (playerScore === scorePlayerWinsAt - 5) {
    alert(player + " is 5 wins from winning the smash down");
  } else if (playerScore === scorePlayerWinsAt - 1) {
    alert(player + " is 1 win from winning the smash down");
  } else if (playerScore >= scorePlayerWinsAt) {
    alert(player + " has won!");
  }
};

export default handleScoreClick;
