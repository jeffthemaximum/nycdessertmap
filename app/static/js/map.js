var map;

var noPoi = [
{
    featureType: "poi",
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: "poi.park",
    stylers: [
      { visibility: "on" }
    ]
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.754, lng: -73.984},
    zoom: 12
  });
  map.setOptions({styles: noPoi});
}


