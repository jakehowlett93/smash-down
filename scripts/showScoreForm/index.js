const showScoreForm = (selectedElements) => {
    if  (selectedElements.length % 2 === 0 && selectedElements.length > 0) {
        $('.form').removeClass('hideElement')
    } else {
        $('.form').addClass('hideElement')
    }
}

export default showScoreForm