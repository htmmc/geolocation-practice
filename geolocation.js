//callback function
function onLocationShow (latitude, longitude){
  var element = document.getElementById("map");
  var image = "<img src='https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&center=" + latitude + "," + longitude + "' width='700' height=auto>";
  element.innerHTML = image;
}

//callback function
function onLocationSuccess (position) {
  var latitude = position.coords.latitude; 
  var longitude = position.coords.longitude;
  onLocationShow(latitude, longitude);
}

//callback function
function onLocationErrors (position){
  map.innerHTML = "<p>Errors - unable to retrieve your location</p>";
}

//show map with latitude and longitude inputs
function onLocate() {
  var latitude = document.getElementById("latitudeInput").value;
  var longitude =document.getElementById("longitudeInput").value;
  onLocationShow(latitude, longitude);
}

//function to show current location on map
function findMyLocation() {
  if(navigator.geolocation) {
  console.log("Geolocation is available");
  navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationErrors);
} else {
  alert("No Geolocation available");
}
};

//fetch data 
function fetchCityData (){
  citydata = document.getElementById("cityInput").value;
  fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text%3D%22' + citydata +'%22&format=json&callback=')
     .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
    var latitude = json.query.results.Result.latitude; 
    var longitude = json.query.results.Result.longitude;
    onLocationShow (latitude, longitude);
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}

//call function findMyLocation when the button is clicked
var findme = document.getElementById("findMe");
findme.addEventListener("click", findMyLocation);

//call function onLocate when the button is clicked
var elSubmit = document.getElementById("submitLocation");
elSubmit.addEventListener("click", onLocate);
//call function fetchCityData when the city value is entered
var elFindCity = document.getElementById("submitCity");
elFindCity.addEventListener("click", fetchCityData);
