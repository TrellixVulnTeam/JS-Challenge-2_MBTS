

function setupTestData() {
    const imageDataArray = new Array();

    imageData = new imageData();
    
    imageDataArray.push(imagedata1);
    console.log(imageDataArray);

}


//get a random number within the defined range
function randomNumber(lowerRange, higherRange) {
    return Math.floor(Math.random() * (higherRange-lowerRange + 1) + lowerRange)
}





//Takes in image data(array) and creates + populates the tiles on the page
function populateTiles(imageDataParam) {


    if (imageDataArray.length != 0) {
        for (i = 0; i < imageDataParam.length; i++) {
            const div = document.createElement("div");
            const img = document.createElement("img");
            img.src = `https://picsum.photos/id/${imageDataParam[i].imageId}/200/300`;
            const parentElement = document.getElementById("image-parent");
            parentElement.appendChild(div);
        }

    }
}


//call this to clear the images 
function refreshImages() {

    //clear the container of tiles
    var tiles = document.getElementsByClassName("tile");
    while (tiles.length > 0) {
        var currentTile = tiles[0];
        currentTile.parentNode.removeChild(currentTile); 
    }
 
    //then rerun the og functions to grab more images
    


    //then run the function that populates the box
}


