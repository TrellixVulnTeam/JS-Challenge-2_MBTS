//main app.js, should contain all main listeners and descriptive interactivity


//module imports
import { grabData } from "./src/js/imageGrabber.js";
import { clearTiles, populateTiles } from "./src/js/tileFunctions.js";
import { validateInput } from "./src/js/validation.js";


//varibles


//event listeners
let refreshButton = document.getElementById("refresh-btn").addEventListener('click', refreshImages);
let assignEmailButton = document.getElementById("assign-btn").addEventListener('click', validateInput);


//functions (This will likely kinda mirror what the page looks like)

//runs when the refresh images button is pressed
function refreshImages() {
    clearTiles();
    grabData();
}





//anything you need to be run on page load




