
const getBtn = document.getElementById('get-btn');


//this will be the image data pulled from the site 
//Needs to 
const grabData = () => {
    //first grab a random page of image data
    rndNum = randomNumber(0, 10);
     axios.get(`https://picsum.photos/v2/list?page=${randomNumber}&limit=100`)
     .then(function(responce) {
         //handle success
         console.log(responce);
     })
     .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    
    //then grab a random image from that page

    //add it to the array of imagedata will later be used to populate the tiles

}


getBtn.addEventListener('click', grabData);

