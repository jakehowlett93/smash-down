import $ from "jquery";
import createPortraitElements from "../createPortraitElements";
import addClickEvent from "../addClickEvent";


const setUpPage = () => {
    const totalCharacters = 80;

    createPortraitElements(totalCharacters);

    const playerOne = "player 1";
    const playerTwo = "player 2";
    let playerOneScore = 0;
    let playerTwoScore = 0;
    const playerOneElement = $("#playerOneScore");
    const playerTwoElement = $("#playerTwoScore");
    playerOneElement.append(playerOneScore);
    playerTwoElement.append(playerTwoScore);
    const playerOneButton = $("#playerOneButton");
    const playerTwoButton = $("#playerTwoButton");
    addClickEvent(playerOneElement, playerOne, playerOneScore, playerOneButton, totalCharacters);
    addClickEvent(playerTwoElement, playerTwo, playerTwoScore, playerTwoButton, totalCharacters);
};

export default setUpPage;