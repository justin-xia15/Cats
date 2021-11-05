const button = document.querySelector(".new-image");
const name = document.querySelector(".name");
const origin = document.querySelector(".origin");
const description = document.querySelector(".description");
const temperament = document.querySelector(".temperament")




var request = new XMLHttpRequest();

const image = document.getElementById("randomCat")

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.thecatapi.com/v1/breeds/search?q=sib",
  "method": "GET",
  "headers": {
    "dd13c657-0fe0-4464-a2c3-d740b0ca1456": "DEMO-API-KEY"
  }
}

$.ajax(settings).done(function (response) {
  var data = response[0];
  name.innerText = `${data.name}`;
  origin.innerText = `Origin: ${data.origin}`;
  description.innerText = `Description: ${data.description}`;
  temperament.innerText = `Temperament: ${data.temperament}`;

  console.log(data);
});


// request.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
// request.open('GET', 'https://api.thecatapi.com/v1/breeds/search?q=sib?api_key=dd13c657-0fe0-4464-a2c3-d740b0ca1456', true);
//
//
// request.onload = function() {
//   var data = JSON.parse(this.response);
//   console.log(data);
//   var data = JSON.parse(this.response);
//   image.src = data[0].url;
// }
//
//
// button.addEventListener("click", function() {
//   location.reload();
// });
//
// request.send();
