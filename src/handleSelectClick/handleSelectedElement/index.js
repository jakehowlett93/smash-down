import applyPlayerOneClasses from '../selectUtilities/applyPlayerOneClasses';
import showScoreForm from '../selectUtilities/showScoreForm';
import applyPlayerTwoClasses from '../selectUtilities/applyPlayerTwoClasses';

const handleSelectedElement = (selectedElements, element) => {
    if (selectedElements.length % 2 === 0) {
        applyPlayerOneClasses(element)
    } else {
        applyPlayerTwoClasses(element)
    }
    element.addClass("selected");
    selectedElements.push(1)
    showScoreForm(selectedElements)
}

export default handleSelectedElement