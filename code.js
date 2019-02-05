et position = {Latitude: 33.787398599999996, Longitude: -84.3831853}

function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
 lat1 = Deg2Rad(lat1);
 lat2 = Deg2Rad(lat2);
 lon1 = Deg2Rad(lon1);
 lon2 = Deg2Rad(lon2);
 var R = 6371; // km
 var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
 var y = (lat2 - lat1);
 var d = Math.sqrt(x * x + y * y) * R;
 return d;
}


function Deg2Rad(deg) {
 return deg * Math.PI / 180;
}

function NearestCity(latitude, longitude) {
 var mindif = 99999;
 var closest;

 for (index = 0; index < cities.length; ++index) {
   var dif = PythagorasEquirectangular(latitude, longitude, cities[index][1], cities[index][2]);
   if (dif < mindif) {
     closest = index;
     mindif = dif;
   }
 }

 // echo the nearest city
 alert(cities[closest]);
}

PythagorasEquirectangular(position.Latitude, position.Longitude, 40.77943, -73.963244)
// 1205.9539208061267
PythagorasEquirectangular(position.Latitude, position.Longitude, 40.738527, -74.005363)
// 1200.3644595194787
PythagorasEquirectangular(position.Latitude, position.Longitude, 40.729975, -73.980926)
// 1201.4486427320726



postition2 = {Latitude: 40.779437, Longitude: -73.963244}
postition3 = {Latitude: 40.738527, Longitude: -74.005363}
postition4 = {Latitude: 40.729975, Longitude: -73.980926}


function centerPoint(positions){
    let lat = 0
    let long = 0
    for(var i = 0; i < positions.length; i++){
        lat += positions[i].Latitude
        long += positions[i].Longitude
    }
    lat /= positions.length
    long /= positions.length
}

centerPoint([position, position2, position3, position4])
