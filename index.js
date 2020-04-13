$(document).ready(function () {
    
    const table = $('<table></table>').click((event) => {handleClick(event)});
    let counter = 1
    for (let column = 0; column < 6; column++) {
        let tableRow = $('<tr></tr>');
        for (let row = 0; row < 13; row++) {
            if (counter < 75) {
                var rowData = $('<td></td>');
                rowData.append($('<img>',{id:counter, src:'./portraits/'+counter+'.png', class:'square'}))
                tableRow.append(rowData);
                counter++
            }
        }
        table.append(tableRow);
    }
    $(".main").append(table);
    
    const handleClick = (event) => {
        const element = $(event.target)
        if (element.hasClass("selected")) {
            element.removeClass('selected')
        } else {
            element.addClass("selected");
        }
    }
});