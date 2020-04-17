import $ from 'jquery';
import showScoreForm from '../showScoreForm'

const handleSelectClick = (event, selectedElements) => {
    const element = $(event.target)
    const portraits = $('.portraits:first')
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
    } else {
        element.parent().removeClass('redTint blueTint')
        element.removeClass('selected')
        selectedElements.pop()
        if (selectedElements.length % 2 === 0) {
            $(portraits).removeClass("playerTwoCursor")
            $(portraits).addClass("playerOneCursor")
        } else {
            $(portraits).removeClass('playerOneCursor')
            $(portraits).addClass("playerTwoCursor")
        }
        
    }

}

export default handleSelectClick