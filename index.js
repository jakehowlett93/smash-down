$(document).ready(function () {

    const showScoreForm = (selectedElements) => {
        if  (selectedElements.length % 2 === 0 && selectedElements.length > 0) {
            $('.form').removeClass('hideElement')
        } else {
            $('.form').addClass('hideElement')
        }
    }

    const handleSelectClick = (event, selectedElements) => {
        const element = $(event.target)
        if (element.hasClass("selected")) {
            element.removeClass('selected')
            selectedElements.pop()
        } else {
            element.addClass("selected");
            selectedElements.push(1)
            showScoreForm(selectedElements)
        }
    }

    const handleScoreClick = (playerDiv, playerScore) => {
        playerDiv.empty()
        playerDiv.append(playerScore)
        $('.form').addClass('hideElement')
    }
    let selectedElements = [];
    
    const portraits = $('.portraits:first');
    portraits.addClass('table')
    for (let element = 1; element < 81; element++) {
        let image = $('<img>',{id:element, src:'./assets/portraits/'+element+'.png', class:'image'})
        image.click((event) => {handleSelectClick(event, selectedElements)})
        const cell = $('<td></td>')
        cell.append(image)
        portraits.append(cell);           
    }

    let playerOneScore = 0;
    let playerTwoScore = 0;
    const playerOne = $('#playerOneScore')
    playerOne.append(playerOneScore)
    const playerTwo = $('#playerTwoScore')
    playerTwo.append(playerTwoScore)

    const playerOneButton = $('#playerOneButton')
    playerOneButton.click(() => {
        playerOneScore++
        handleScoreClick(playerOne, playerOneScore)
    })
    const playerTwoButton = $('#playerTwoButton')
    playerTwoButton.click(() => {
        playerTwoScore++
        handleScoreClick(playerTwo, playerTwoScore)
    })
    
});