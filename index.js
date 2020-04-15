$(document).ready(function () {
    
    const table = $('<table></table>').click((event) => {handleClick(event)});
    let counter = 1
    for (let column = 0; column < 6; column++) {
        let tableRow = $('<tr></tr>');
        for (let row = 0; row < 13; row++) {
            if (counter < 75) {
                var rowData = $('<td></td>');
                rowData.append($('<img>',{id:counter, src:'./portraits/'+counter+'.png', class:'square'}))
                tableRow.append(rowData);
                counter++
            }
        }
        table.append(tableRow);
    }
    $(".main").append(table);
    
    const handleClick = (event) => {
        const element = $(event.target)
        if (element.hasClass("selected")) {
            element.removeClass('selected')
        } else {
            element.addClass("selected");
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