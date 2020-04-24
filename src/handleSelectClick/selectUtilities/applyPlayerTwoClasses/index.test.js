import $ from "jquery";
import applyPlayerTwoClasses from "./index";

describe("applyPlayerTwoClasses", () => {
    document.body.innerHTML = 
    "<div class=\"parent\">" +
    "   <div class=\"portraits playerTwoCursor\"><div>";
    "</div>";

    const portraits = $(".portraits");

    beforeEach(() => {
        applyPlayerTwoClasses(portraits);
    });

    it("should add blueTint to the parent element", () => {
        expect($(".parent").hasClass("blueTint")).toBeTruthy();
    });
    it("should remove the playerTwoCursor class from the portraits element", () => {
        expect(portraits.hasClass("playerTwoCursor")).toBeFalsy();
    });
    it("should add the playerOneCursor class to the portraits element", () => {
        expect(portraits.hasClass("playerOneCursor")).toBeTruthy();
    });
});