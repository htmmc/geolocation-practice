var element = document.getElementById("map");
var elLatitudeInput = document.getElementById("latitudeInput");
var elLongitudeInput =document.getElementById("longitudeInput");

function LocationShow (latitude, longitude){ 
  var image = "<img src='https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&center=" + latitude + "," + longitude + "' width='700' height=auto>";
  element.innerHTML = image;
}

//callback function
function onLocationSuccess (position) {
  var latitude = position.coords.latitude; 
  var longitude = position.coords.longitude;
  LocationShow(latitude, longitude);
}

//callback function
function onLocationErrors (position){
  element.innerHTML = "<p>Errors - unable to retrieve your location</p>";
}

//show map with latitude and longitude inputs
function onLocate() {
  var latitude = elLatitudeInput.value;
  var longitude =elLongitudeInput.value;
  LocationShow(latitude, longitude);
}