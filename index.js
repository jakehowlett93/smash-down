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

    //will refactor these into one function eventually
    const handleScoreClick1 = (player) => {
        player.empty()
        playerOneScore++
        player.append(playerOneScore)
        $('.form').removeClass('hideElement') //does not work for some reason
    }
    const handleScoreClick2 = (player) => {
        player.empty()
        playerTwoScore++
        player.append(playerTwoScore)
        $('.form').removeClass('hideElement') //does not work for soem reason
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

    let playerOneScore = 0
    let playerTwoScore = 0
    const playerOne = $('#playerOneScore')
    playerOne.append(playerOneScore)
    const playerTwo = $('#playerTwoScore')
    playerTwo.append(playerTwoScore)

    const playerOneButton = $('.playerOneButton:first')
    playerOneButton.click(() => {handleScoreClick1(playerOne)})
    const playerTwoButton = $('.playerTwoButton:first')
    playerTwoButton.click(() => {handleScoreClick2(playerTwo)})
    


});