navigator.geolocation.getCurrentPosition(showPosition, onError);

function showPosition(position) {
  console.log("latitude is: " + position.coords.latitude);
  console.log("longitude is: " + position.coords.longitude);
}

function onError(err) {
  console.log("Could not get the position");
}
