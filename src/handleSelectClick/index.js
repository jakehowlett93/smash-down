import $ from "jquery";
import handleSelectedElement from "./handleSelectedElement";
import unselectElement from "./unselectElement";

const handleSelectClick = (event, selectedElements) => {
  const element = $(event.target);
  if (!element.hasClass("selected")) {
    handleSelectedElement(selectedElements, element);
  } else {
    unselectElement(selectedElements, element);
  }
};

export default handleSelectClick;
