import $ from "jquery";

const applyPlayerOneClasses = (element) => {
  element.parent().addClass("redTint");
  $(".portraits").removeClass("playerOneCursor");
  $(".portraits").addClass("playerTwoCursor");
};

export default applyPlayerOneClasses;
