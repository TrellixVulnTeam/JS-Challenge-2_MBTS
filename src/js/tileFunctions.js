

//All functions related to manipulating the tiles 



//populates the tiles on the page (requires an array of data as input)
export function populateTiles(imageData) {


    if (imageData.length != 0) {
        for (let i = 0; i < imageData.length; i++) {
            //the html elements being inserted
            let div = document.createElement("div");
            div.classList.add("tile");
            let img = document.createElement("img");
            img.src = `https://picsum.photos/id/${imageData[i].id}/400/400`;
            let parentElement = document.getElementById("image-parent");
            parentElement.appendChild(div);
            div.appendChild(img);

        }
    }
}

//function to clear all currently loaded tiles (takes in a parent)
export function clearTiles() {
    var tiles = document.getElementsByClassName("tile");
    while (tiles.length > 0) {
        var currentTile = tiles[0];
        currentTile.parentNode.removeChild(currentTile); 
    }
} 



//run a loop and open a listener on each tile to that when clicked they can be selected
export function setupTileSelectors() {
    var tiles = document.getElementsByClassName("tile");
    for (let index = 0; index < tiles.length; index++) {
        var element = array[index];
        element.addEventListener("click", function(){
            console.log("this is clicked");
        }); 
    }
}