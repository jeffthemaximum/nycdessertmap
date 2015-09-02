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

var magnoliaUWSLatLong  = {lat: 40.775764, lng: -73.9802664}

var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Magnolia Upper West Side</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Magnolia Upper West Side</b>, best known for it\'s cupcakes, ' +
  'is one of Jeff and Emily\'s go-to desset spots in NYC. '+
  'When Jeff and Emily go here, they recommend getting a '+
  'vanilla cupcake with pink vanilla butter cream. '+
  'They\'re also crazy about Magnolia\'s banana pudding. '+
  'The pudding is a secret speciality at Magnolia, as most people '+
  'only know about the cupcakes.</p>'+
  '<p>Learn more here: <a href="">'+
  'More detailed writeup about Magnolia UWS</a> '+
  '(last visited by Jeff and Emily on August 13, 2015).</p>'+
  '</div>'+
  '</div>';


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.754, lng: -73.984},
    zoom: 12
  });
  map.setOptions({styles: noPoi});

    var magnoliaUWS = new google.maps.Marker({
        position: magnoliaUWSLatLong,
        map: map,
        title: 'Magnolia UWS!'
    });

    magnoliaUWS.addListener('click', function() {
        infowindow.open(map, magnoliaUWS);
    });

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
}


