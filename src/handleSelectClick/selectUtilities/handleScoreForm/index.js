import $ from "jquery";

const handleScoreForm = (selectedElements) => {
    if  (selectedElements.length % 2 === 0 && selectedElements.length > 0) {
        $(".form input").attr("disabled", false).removeClass("disabled");
    }
};

export default handleScoreForm;