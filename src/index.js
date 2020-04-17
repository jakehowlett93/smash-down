import $ from 'jquery';
import handleScoreClick from './handleScoreClick'
import createPortraitElements from './createPortraitElements';

$(document).ready(function () {
    
    const totalCharacters = 80

    createPortraitElements(totalCharacters)

    let playerOneScore = 0;
    let playerTwoScore = 0;
    const playerOneElement = $('#playerOneScore')
    playerOneElement.append(playerOneScore)
    const playerTwoElement = $('#playerTwoScore')
    playerTwoElement.append(playerTwoScore)

    const playerOneButton = $('#playerOneButton')
    playerOneButton.click(() => {
        playerOneScore++
        const playerOne = 'Player 1'
        handleScoreClick(playerOneElement, playerOneScore, playerOne, totalCharacters)
    })
    const playerTwoButton = $('#playerTwoButton')
    playerTwoButton.click(() => {
        playerTwoScore++
        const playerTwo = 'player 2'
        handleScoreClick(playerTwoElement, playerTwoScore, playerTwo, totalCharacters)
    })
    
});