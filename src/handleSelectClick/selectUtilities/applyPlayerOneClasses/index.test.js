import $ from "jquery";
import applyPlayerOneClasses from "./index";

describe("applyPlayerTwoClasses", () => {
  document.body.innerHTML =
    '<div class="parent">' + '   <div class="portraits playerOneCursor"><div>';
  ("</div>");

  const portraits = $(".portraits");

  beforeEach(() => {
    applyPlayerOneClasses(portraits);
  });

  it("should add redTint to the parent element", () => {
    expect($(".parent").hasClass("redTint")).toBeTruthy();
  });
  it("should remove the playerOneCursor class from the portraits element", () => {
    expect(portraits.hasClass("playerOneCursor")).toBeFalsy();
  });
  it("should add the playerTeoCursor class to the portraits element", () => {
    expect(portraits.hasClass("playerTwoCursor")).toBeTruthy();
  });
});
