import $ from "jquery";
import handleScoreForm from "./index";

describe("handleScoreForm", () => {
  document.body.innerHTML = '<div class="form">' + '<input class="disabled">';
  ("</div>");
  let selectedElements = ["mock"];

  describe("when selectedElements is odd", () => {
    it("the input element should have the class disabled", () => {
      handleScoreForm(selectedElements);
      expect($(".form input").hasClass("disabled")).toBeTruthy();
    });
  });

  describe("when selectedElements is even and above 0", () => {
    it("should remove the disabled class from the input element", () => {
      selectedElements.push("mock");
      handleScoreForm(selectedElements);
      expect($(".form input").hasClass("disabled")).toBeFalsy();
    });
  });
});
