var request = new XMLHttpRequest();

const image = document.getElementById("randomCat")
const container = document.createElement('div');
container.setAttribute('class', 'container');

request.open('GET', 'https://api.thecatapi.com/v1/images/search', true);

request.onload = function() {
  var data = JSON.parse(this.response);
  image.src = data[0].url;
}

request.send();
