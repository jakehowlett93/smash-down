import $ from "jquery";

const applyPlayerTwoClasses = (element) => {
  element.parent().addClass("blueTint");
  $(".portraits").removeClass("playerTwoCursor");
  $(".portraits").addClass("playerOneCursor");
};

export default applyPlayerTwoClasses;
