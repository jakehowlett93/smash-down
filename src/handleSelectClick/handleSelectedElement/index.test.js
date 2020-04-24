import $ from "jquery";
import handleSelectedElement from "./index";
import applyPlayerOneClasses from "../selectUtilities/applyPlayerOneClasses";
import applyPlayerTwoClasses from "../selectUtilities/applyPlayerTwoClasses";
import handleScoreForm from "../selectUtilities/handleScoreForm";

jest.mock("../selectUtilities/applyPlayerOneClasses");
jest.mock("../selectUtilities/applyPlayerTwoClasses");
jest.mock("../selectUtilities/handleScoreForm");

describe("handleSelectedElement", () => {
    document.body.innerHTML = 
    "<div class=\"element\"></div>";
    const element = $(".element");
    let selectedElements = [1, 1];

    describe("when its player ones turn (even)", () => {
        beforeEach(() => {
            handleSelectedElement(selectedElements, element);
        });
        it("should call applyPlayerOneClasses", () => {
            expect(applyPlayerOneClasses).toHaveBeenCalled();
        });
    });
    
    describe("when its player twos turn (odd)", () => {
        beforeEach(() => {
            selectedElements = [1, 1, 1,];
            handleSelectedElement(selectedElements, element);
        });
        it("should call applyPlayerTwoClasses", () => {
            expect(applyPlayerTwoClasses).toHaveBeenCalled();
        });
    });

    describe("when called", () => {
        beforeEach(() => {
            selectedElements = [1, 1];
            handleSelectedElement(selectedElements, element);
        });
        it("should add the selected class to element", () => {
            expect(element.hasClass("selected")).toBeTruthy();
        });
        it("should add a 1 to the selectedElements array", () => {
            expect(selectedElements.length).toEqual(3); 
        });
        it("should call handleScoreForm", () => {
            expect(handleScoreForm).toHaveBeenCalled();
        });
    });
});