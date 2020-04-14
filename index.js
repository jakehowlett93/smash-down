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
    
    const table = $('.table:first');
    table.addClass('table')
    let counter = 1
    for (let row = 0; row < 7; row++) {
        let tableRow = $('<tr></tr>').addClass('row');
        for (let column = 0; column < 13; column++) {
            if (counter < 81) {
                const cell = $('<td></td>');
                cell.addClass('cell')
                let portrait = $('<img>',{id:counter, src:'./portraits/'+counter+'.png', class:'portrait'})
                cell.append(portrait)
                cell.click((event) => {handleSelectClick(event)})
                tableRow.append(cell);
                counter++
            }
        }
        table.append(tableRow);
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