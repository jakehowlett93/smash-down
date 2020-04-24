import $ from "jquery";

const unselectElement = (selectedElements, element) => {
  element.parent().removeClass("redTint blueTint");
  element.removeClass("selected");
  selectedElements.pop();
  if (selectedElements.length % 2 === 0) {
    $(".portraits").removeClass("playerTwoCursor");
    $(".portraits").addClass("playerOneCursor");
  } else {
    $(".portraits").removeClass("playerOneCursor");
    $(".portraits").addClass("playerTwoCursor");
  }
};

export default unselectElement;
