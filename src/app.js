
//main app.js, should contain all main listeners and descriptive interactivity

//module imports
import {
    currentlyLoadedImage,
    grabData
} from "./js/imageGrabber.js";
import {
    clearTiles,
    generateAndPopulateHtml
} from "./js/tileFunctions.js";
import {
    validateInput
} from "./js/validation.js";
import {
    emailObject
} from "./js/emailObject.js";


//varibles
//array of email ojects (so it can handle multiple emails/calls simultaniously)
var emailObjects = [];
const parentElement = document.getElementById("image-parent");

//event listeners
let refreshButton = document.getElementById("refresh-btn").addEventListener('click', refreshImages);
let assignEmailButton = document.getElementById("assign-btn").addEventListener('click', assignToEmail);
let showButton = document.getElementById("show-btn").addEventListener('click', showAssignedImages);

//functions (This will likely kinda mirror what the page looks like)

//runs when the refresh images button is pressed
function refreshImages() {
    //clear the tile
    clearTiles();
    //grab some more data, then when that data is ready, throw it in the img src
    grabData(generateAndPopulateHtml);
}


//TO Do
//Random function doesnt quite translate to for loop


function assignToEmail() {
    //if the email passes AND an image exists to be loaded
    if (validateInput() == true && currentlyLoadedImage != null) {

        //grab the currently input email + image
        let currentlyInputEmail = document.getElementById("email").value;
        let currentlySelectedImage = currentlyLoadedImage;
        //we assume they are not on until we have checked
        let doesEmailExist = false;
        let isImageRepeat = false;
        let foundEmailObjIndex;
        
        //try find the email
        if(emailObjects.length != 0) {
            for (let i = 0; i < emailObjects.length; i++) {
                if(emailObjects[i].email == currentlyInputEmail) {
                    //found email
                    doesEmailExist = true;
                    foundEmailObjIndex = i;
                }
                else {
                    //finished looping and not found it
                    doesEmailExist = false;
                }
            }
        }

        //if an email has been found, check if the image is a duplicate and if not, add to list
        if(doesEmailExist) {
            if(!emailObjects[foundEmailObjIndex].images.includes(currentlySelectedImage)){
                emailObjects[foundEmailObjIndex].images.push(currentlySelectedImage);
                //image is not duplicate and so has been added
            }
            else
            {
                //image is a duplicate so has not been added, maybe give some feed back to the user

            }
        }
        //if the email does not exist, add it and then add the image
        else {
            let newEmailObj = new emailObject(); 
            newEmailObj.email = currentlyInputEmail;
            newEmailObj.images.push(currentlySelectedImage);
            emailObjects.push(newEmailObj);
        }

        
        //if the array is empty add the email (The last case we check, we must assume the array is empty)
        if(emailObjects.length == 0) {
            let newEmailObj = new emailObject(); 
            newEmailObj.email = currentlyInputEmail;
            newEmailObj.images.push(currentlySelectedImage);
            emailObjects.push(newEmailObj);
        }

    }
}








function showAssignedImages() {
    //clear the box, just for now (maybe make another box)
    clearTiles();
    //loop through populate again
    if(validateInput() == true)
    {
        for (let i = 0; i < emailObjects.length; i++) {
            var curEmail = document.getElementById("email").value;
            if (emailObjects[i].email == curEmail) {
                for (let j = 0; j < emailObjects[i].images.length; j++) {
                    generateAndPopulateHtml(emailObjects[i].images[j], parentElement);
                }
            }
        }
    }
}