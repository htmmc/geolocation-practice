

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
    LocationShow (latitude, longitude);
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
