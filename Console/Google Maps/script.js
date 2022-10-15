const divMap = document.getElementById("map");

function initMap() {
  map = new google.maps.Map(divMap, {
    center: { lat: 29.2183, lng: 79.5130 },
    zoom: 14
  })
}
