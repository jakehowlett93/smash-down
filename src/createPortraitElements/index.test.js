import $ from "jquery";
import createPortraitElements from "./index";

describe("createPortraitElements", () => {
  const totalCharacters = 1;
  document.body.innerHTML = '<div class="portraits"></div>';
  const portraits = $(".portraits:first");
  beforeEach(() => {
    createPortraitElements(totalCharacters);
  });
  it("should add the table class to portraits", () => {
    expect(portraits.hasClass("table")).toBeTruthy();
  });
  it("should append two children to portraits", () => {
    expect(portraits.children().length).toEqual(2);
  });
  it("should add the image class to the image element", () => {
    expect($(".image")).toBeTruthy();
  });
  it("should add the rowSpacing class to the imageDiv", () => {
    expect($(".rowSpacing")).toBeTruthy();
  });
});
