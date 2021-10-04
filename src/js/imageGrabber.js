//imports


//get a random number within the defined range
function randomNumber(lowerRange, higherRange) {
  return Math.floor(Math.random() * (higherRange - lowerRange + 1) + lowerRange)
}


var config = {
  responseType: 'stream'
};

var imageData;


//this will grab a random page of images & returns the data as an array
export function grabData() {
  let rndNum = randomNumber(0, 10);
  var returnedData;

  axios.get(`https://picsum.photos/v2/list?page=${rndNum}&limit=18`, config)
    .then(response => {
      pullImages(response.data);

    })
    .catch(function (error) {
      console.log(error);
    })
}

//function to pull the data out once the promise resolves
function pullImages(data) {
  console.log(data);
  imageData = data;
}
