//imports



export var currentlyLoadedImage;
var rndPageNumber;
var rndIDNumber;
var picsumUrl = `https://picsum.photos/v2/list?page${rndPageNumber}2&limit=100`;


//variables
const parentElement = document.getElementById("image-parent");

//get a random number within the defined range
export function randomNumber(lowerRange, higherRange) {
  return Math.floor(Math.random() * (higherRange - lowerRange + 1) + lowerRange)
}

//the entire program needs to be able to run with the data filling afterwards 
export function grabData(generateAndPopulateHtml) {
  //randomise the image first
  rndPageNumber = randomNumber(1, 10);
  rndIDNumber = randomNumber(0, 100);
  //console.log(rndIDNumber);
  //console.log(rndPageNumber);

// Make a request for a image with a given ID
axios.get(picsumUrl)
  .then(function (response) {
    // handle success
    generateAndPopulateHtml(response.data[rndIDNumber].id,parentElement);
    currentlyLoadedImage = response.data[rndIDNumber].id,document;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}

