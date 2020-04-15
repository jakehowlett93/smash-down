$(document).ready(function () {

    const totalCharacters = 80

    const showScoreForm = (selectedElements) => {
        if  (selectedElements.length % 2 === 0 && selectedElements.length > 0) {
            $('.form').removeClass('hideElement')
        } else {
            $('.form').addClass('hideElement')
        }
    }

    const handleSelectClick = (event, selectedElements) => {
        const element = $(event.target)
        
        
        if (!element.hasClass('selected')) {
            if (selectedElements.length % 2 === 0) {
                element.parent().addClass('redTint')
                $(portraits).removeClass('playerOneCursor')
                $(portraits).addClass('playerTwoCursor')
            } else {
                element.parent().addClass('blueTint')
                $(portraits).removeClass('playerTwoCursor')
                $(portraits).addClass('playerOneCursor')
            }
            element.addClass("selected");
            selectedElements.push(1)
            showScoreForm(selectedElements)          
        }

    }

    const handleScoreClick = (playerElement, playerScore, player) => {
        playerElement.empty()
        playerElement.append(playerScore)
        $('.form').addClass('hideElement')
        const scorePlayerWinsAt =  (totalCharacters / 2)
        if (playerScore === scorePlayerWinsAt - 5) {
            alert(player + ' is 5 wins from winning the smash down')
        }
        else if (playerScore === scorePlayerWinsAt - 1) {
            alert(player + ' is 1 win from winning the smash down')
        }
        else if (playerScore > scorePlayerWinsAt) {
            alert(player + ' has won!')
        }
    }
    let selectedElements = [];
    
    const portraits = $('.portraits:first');
    portraits.addClass('table playerOneCursor')
    for (let element = 1; element < totalCharacters + 1; element++) {
        let image = $('<img>',{id:element, src:'./assets/portraits/'+element+'.png', class:'image'})
        image.click((event) => {handleSelectClick(event, selectedElements)})
        const div = $('<div></div>')
        div.append(image)
        div.addClass('rowSpacing')
        portraits.append(div);           
    }

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
        handleScoreClick(playerOneElement, playerOneScore, playerOne)
    })
    const playerTwoButton = $('#playerTwoButton')
    playerTwoButton.click(() => {
        playerTwoScore++
        const playerTwo = 'player 2'
        handleScoreClick(playerTwoElement, playerTwoScore, playerTwo)
    })
    
});