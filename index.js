$(document).ready(function () {

    const showScoreForm = () => {
        let selectedElementsList = $('.selected')
        if  (!selectedElementsList.length % 2 === 0) {
            $('.form:first').removeClass('hideElement')
        }
    }

    const handleSelectClick = (event) => {
        const element = $(event.target)
        if (element.hasClass("selected")) {
            element.removeClass('selected')
        } else {
            element.addClass("selected");
        }
    }
    
    const portraits = $('.portraits:first');
    portraits.addClass('table')
    for (let element = 1; element < 81; element++) {
        let image = $('<img>',{id:element, src:'./portraits/'+element+'.png', class:'image'})
        image.click((event) => {handleSelectClick(event)})
        const cell = $('<td></td>')
        cell.append(image)
        portraits.append(cell);           
    }
    showScoreForm()

    let playerOneScore = 0
    let playerTwoScore = 0
    const playerOne = $('.playerOneScore:first')
    playerOne.append(playerOneScore)
    const playerTwo = $('.playerTwoScore:first')
    playerTwo.append(playerTwoScore)

    const playerOneButton = $('.playerOneButton:first')
    playerOneButton.click(() => {handleScoreClick1(playerOne)})
    const playerTwoButton = $('.playerTwoButton:first')
    playerTwoButton.click(() => {handleScoreClick2(playerTwo)})
    
    //will refactor these into one function eventually
    const handleScoreClick1 = (player) => {
        player.empty()
        playerOneScore++
        player.append(playerOneScore)
    }
    const handleScoreClick2 = (player) => {
        player.empty()
        playerTwoScore++
        player.append(playerTwoScore)
    }
});