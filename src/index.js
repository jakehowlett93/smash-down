import $ from 'jquery';
import createPortraitElements from './createPortraitElements';
import addClickEvent from './addClickEvent';

$(document).ready(function () {
    
    const totalCharacters = 80

    createPortraitElements(totalCharacters)

    const playerOne = 'player 1'
    const playerTwo = 'player 2'
    let playerOneScore = 0;
    let playerTwoScore = 0;
    const playerOneElement = $('#playerOneScore')
    playerOneElement.append(playerOneScore)
    const playerTwoElement = $('#playerTwoScore')
    playerTwoElement.append(playerTwoScore)
    const playerOneButton = $('#playerOneButton')
    const playerTwoButton = $('#playerTwoButton')
    addClickEvent(playerOneElement, playerOne, playerOneScore, playerOneButton, totalCharacters)
    addClickEvent(playerTwoElement, playerTwo, playerTwoScore, playerTwoButton, totalCharacters)
    
});