import $ from "jquery";
import handleSelectClick from "../handleSelectClick";

const createPortraitElements = (totalCharacters) => {
    let selectedElements = [];
    const portraits = $(".portraits:first");
    portraits.addClass("table playerOneCursor");
    for (let element = 1; element < totalCharacters + 1; element++) {
        let image = $("<img>",{id:element, src:"./assets/portraits/"+element+".png", class:"image"});
        image.click((event) => {handleSelectClick(event, selectedElements);});
        const imageDiv = $("<div></div>");
        imageDiv.append(image);
        imageDiv.addClass("rowSpacing");
        portraits.append(imageDiv);           
    }
};

export default createPortraitElements;