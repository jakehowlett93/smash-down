import $ from "jquery";
import handleSelectClick from "./index";
import handleSelectedElement from "./handleSelectedElement";
import unselectElement from "./unselectElement";

jest.mock("./handleSelectedElement");
jest.mock("./unselectElement");

describe("handleSelectClick", () => {
  document.body.innerHTML =
    '<div class="noSelect"></div>' + '<div class="selected"></div>';

  const noSelectEvent = {
    target: $(".noSelect"),
  };
  const selectEvent = {
    target: $(".selected"),
  };
  let selectedElements = [];

  describe("if element doesnt have the class select", () => {
    it("should call handleSelectedElement", () => {
      handleSelectClick(noSelectEvent, selectedElements);
      expect(handleSelectedElement).toHaveBeenCalled();
    });
  });
  describe("if element does have the class select", () => {
    it("should call unselectElement", () => {
      handleSelectClick(selectEvent, selectedElements);
      expect(unselectElement).toHaveBeenCalled();
    });
  });
});
