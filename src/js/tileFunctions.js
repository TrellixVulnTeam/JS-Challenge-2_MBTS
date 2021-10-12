

//All functions related to manipulating the tiles 


//Takes in an id and creates html elements and places them under the passed param
export function generateAndPopulateHtml(imageID, tileParent) {
    //create the div tile
    let div = document.createElement("div");      
    div.classList.add("tile");  
    div.setAttribute("id", "thisTile");
    //create the img tag
    let img = document.createElement("img");
    //set the image source
    img.src = `https://picsum.photos/id/${imageID}/400/400`;
    //add it under the parent
    tileParent.appendChild(div);
    div.appendChild(img);
    
}

//function to clear all currently loaded tiles (takes in a parent)
export function clearTiles() {
    var tiles = document.getElementsByClassName("tile");
    while (tiles.length > 0) {
        var currentTile = tiles[0];
        currentTile.parentNode.removeChild(currentTile); 
    }
} 

var currentTile;
//Pass in a tile and then add an event listener to the t
export function addTileSelector(tile) {
    currentTile = tile;
    //add the listener with the function that adds the class to it "selected"
    currentTile.addEventListener("click", selectTile);
}

//function to add the selected class to the tile
function selectTile() {
    currentTile.classList.add("selected")
}


