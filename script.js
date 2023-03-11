//bus1
document.getElementById("puv1").onclick = function () {


  firebase
    .database()
    .ref("GPS/" + "proto1")
    .on("value", function (snap) {
      const lat = snap.val().latitude;
      const long = snap.val().longitude;
      updateMap(lat, long);
    });
};

//bus2
document.getElementById("puv2").onclick = function () {


  firebase
    .database()
    .ref("GPS/" + "proto2")
    .on("value", function (snap) {
      const lat = snap.val().latitude;
      const long = snap.val().longitude;
      updateMap(lat, long);
    });
};



//Goolge Maps codes
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 14.585281, lng: 121.043164},
    zoom: 13,
  });
}

function updateMap(lat, long) {
  const image = "./Icons/bus.png";

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long},
    zoom: 13,
  });
  puvMarker = new google.maps.Marker({
    position: { lat: lat, lng: long },
    map,
    icon: image,
  });
}

window.initMap = initMap;

