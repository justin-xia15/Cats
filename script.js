const button = document.querySelector(".new-image");

var request = new XMLHttpRequest();

const image = document.getElementById("randomCat")

request.open('GET', 'https://api.thecatapi.com/v1/images/search', true);

request.onload = function() {
  var data = JSON.parse(this.response);
  image.src = data[0].url;
}


button.addEventListener("click", function() {
  location.reload();
});

request.send();
