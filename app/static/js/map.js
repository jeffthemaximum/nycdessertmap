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

function DessertSpot(latlong, descr, map, name) {
        this.name = name;
        this.latLong = latlong;
        this.descr  = descr;
        this.marker = new google.maps.Marker({
            position: latlong,
            map: map,
            title: name
        });

        //store dict of all dessert spots
        DessertSpot.hashTable[name] = this;
};

DessertSpot.hashTable = {};

function findRelevantRestaurant() {
    var str = window.location.href;
    var n = str.lastIndexOf('/');
    var result = str.substring(n + 1);
    if (result == '') {
        return dessertData;
    } else {
        for (var i = 0; i < dessertData.length; i++) {
            if (dessertData[i].name == result) {
                return [dessertData[i]];
            }
        }
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.754, lng: -73.984},
        zoom: 12
    });
    map.setOptions({styles: noPoi});

    var foo = findRelevantRestaurant();

    //iterate over all restaurants in
    foo.forEach(function(item) {
        //create new marker for restaurant
        newSpot = new DessertSpot(item.latLong, item.descr, map, item.name)
        //create new info window for restaurant
        newSpot.infoWin = new google.maps.InfoWindow({content: item.descr});
        //add click listener for marker
        google.maps.event.addListener(newSpot.marker, 'click', function() {
            //if any info window are open, close them when new window is clicked
            if (newSpot.infoWin) {
                newSpot.infoWin.close();
            }
            //set content of info window
            newSpot.infoWin.setContent(item.descr);
            //open new info window
            newSpot.infoWin.open(map, this);
        });
    })

}
