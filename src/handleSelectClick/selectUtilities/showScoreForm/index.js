import $ from 'jquery'

const showScoreForm = (selectedElements) => {
    if  (selectedElements.length % 2 === 0 && selectedElements.length > 0) {
        $('.form input').attr('disabled', false)
    } else {
        $('.form input').attr('disabled', true)
    }
}

export default showScoreForm