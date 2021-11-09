const button = document.querySelector(".new-image");
const name = document.querySelector(".name");
const origin = document.querySelector(".origin");
const description = document.querySelector(".description");
const temperament = document.querySelector(".temperament");
const options = document.querySelector(".select-options");

var request = new XMLHttpRequest();

const image = document.getElementById("cat")

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.thecatapi.com/v1/images/search?breed_ids=asho",
  "method": "GET",
  "headers": {
    "dd13c657-0fe0-4464-a2c3-d740b0ca1456": "DEMO-API-KEY"
  }
}

var list = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.thecatapi.com/v1/breeds",
  "method": "GET",
  "headers": {
    "dd13c657-0fe0-4464-a2c3-d740b0ca1456": "DEMO-API-KEY"
  }
}

// Image and info
$.ajax(settings).done(function(response) {
  var data = response[0];
  var info = data.breeds[0];
  image.src = data.url;
  console.log(info);
  name.innerText = info.name;
  origin.innerText = `Origin: ${info.origin}`;
  description.innerText = `Description: ${info.description}`;
  temperament.innerText = `Temperament: ${info.temperament}`;

});

// List of breeds
$.ajax(list).done(function(res) {
  var data = res;
  console.log(data);

  // Populate list with breeds
  for (let i = 0; i < data.length; i++) {
    var item = document.createElement("OPTION");
    item.innerText = data[i].name;
    item.setAttribute("id", data[i].id);
    item.classList.add("breed");
    options.appendChild(item);
  }

});
