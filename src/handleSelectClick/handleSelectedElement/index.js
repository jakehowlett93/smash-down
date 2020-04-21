import applyPlayerOneClasses from '../selectUtilities/applyPlayerOneClasses';
import handleScoreForm from '../selectUtilities/handleScoreForm';
import applyPlayerTwoClasses from '../selectUtilities/applyPlayerTwoClasses';

const handleSelectedElement = (selectedElements, element) => {
    if (selectedElements.length % 2 === 0) {
        applyPlayerOneClasses(element)
    } else {
        applyPlayerTwoClasses(element)
    }
    element.addClass("selected");
    selectedElements.push(1)
    handleScoreForm(selectedElements)
}

export default handleSelectedElement