
function initMap() {
  var map;
  map = new google.maps.Map(document.getElementById('herd-map'), {
    center: {lat: 52.35, lng: 0.3755},
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 18
  });
  //map.controls[google.maps.ControlPosition.TOP_RIGHT].push(
  //document.getElementById('herd-legend'));
  var bounds = new google.maps.LatLngBounds();

    // Multiple Markers

    var markersData= [
    {title: 'Cattle ID 1', lat: 52.35, lng: 0.3757, iconImage: 'res/icon-cow-green.png', infowindowImage:'res/cow-pov-9.jpg'},
    {title: 'Cattle ID 2', lat: 52.35, lng: 0.3758, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-8.jpg'},
    {title: 'Cattle ID 3', lat: 52.35, lng: 0.3751, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-7.jpg'},
    {title: 'Cattle ID 4', lat: 52.35, lng: 0.3752, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-6.jpg'},
    {title: 'Cattle ID 5', lat: 52.351, lng: 0.375505, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-5.jpg'},
    {title: 'Cattle ID 6', lat: 52.351, lng: 0.375604, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-4.jpg'},
    {title: 'Cattle ID 7', lat: 52.35, lng: 0.375602, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-3.jpg'},
    {title: 'Cattle ID 8', lat: 52.35, lng: 0.3757, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-2.jpg'},
    {title: 'Gate ID 1', lat: 52.352682, lng: 0.37293971, iconImage: 'res/icon-fence-green.png',infowindowImage:'res/cow-pov-1.jpg'},
    {title: 'Cattle ID 10', lat: 52.34981, lng: 0.3756, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-2.jpg'},
    {title: 'Cattle ID 11', lat: 52.34982, lng: 0.3757, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-3.jpg'},
    {title: 'Cattle ID 12', lat: 52.3498, lng: 0.3759, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-4.jpg'},
    {title: 'Cattle ID 13', lat: 52.3498, lng: 0.3753, iconImage: 'res/icon-cow-green.png',infowindowImage:'res/cow-pov-5.jpg'},
    {title: 'Cattle ID 14', lat: 52.352, lng: 0.3765, iconImage: 'res/icon-cow-red.png', alert: 'LABOR',infowindowImage:'res/cow-pov-6.jpg'},
    {title: 'Tractor ID 1', lat: 52.350323, lng: 0.37678599, iconImage: 'res/icon-tractor-green.png',infowindowImage:'res/cow-pov-9.jpg'}
  ];
  
  //dynamically create content for infoWindow
for (var i = 0; i<markersData.length; i++){
	markersData[i].infoWindowContent = createInfoWindowContent(markersData[i].title,markersData[i].infowindowImage, markersData[i].alert);
  }

  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(), marker, i;

  // Loop through our array of markers & place each one on the map
  for( var i = 0; i < markersData.length; i++ ) {
    var position = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
    bounds.extend(position);
    marker = new google.maps.Marker({
          position: position,
          map: map,
          title: markersData[i].title,
          icon: markersData[i].iconImage,
		  infoWindowContent: markersData[i].infoWindowContent
      });
    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(marker.infoWindowContent);
        infoWindow.open(map, marker);
      }
    })(marker, i));
	
	markers.push(marker);

        // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
  }

  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
      this.setZoom(16);
      google.maps.event.removeListener(boundsListener);
  });
}

function createInfoWindowContent(title, image, alert){

var output = "";
if (alert === 'LABOR')
{
	output = '<div class="info_content" style="text-align: center;">' +
       title + 
        '<div class="alert alert-danger">'
        + '<span class="glyphicon glyphicon-exclamation-sign"></span>' +
        '&nbsp<strong>In Labor</strong></div>' +
      '<div class="infowindow-image">'+
	  '<a href="'+image+'" data-lightbox="cattle-lightbox-14"><img src="'+image+'" style="width: 150px;"/></a></div'+
	  '<br><br><a href="#cattle" onclick="viewCattle()">View Details</a>' +
	  '</div>'
}
else
{
output = '<div class="info_content" style="text-align: center;">' +
			title +
			'<div class="infowindow-image">' +
			'<a href="' + image +'" data-lightbox="' + image +'"><img src="' + image + '" style="width: 150px;"/>'+
			'</a></div></div>'
}

return output;

}


function cattleMovement() {

var maxLat = 52.350447;
var minLat = 52.349805;
var maxLng = 0.37722051;
var minLng = 0.37468851;

//some cows
	for( i = 0; i < 3; i++ )
	{
	  var randomMultiplier = (Math.random() * 20) - 10;

	  var latMovement = 0.000001 * randomMultiplier;
	  var lngMovement = 0.000001 * randomMultiplier;
	  
	  var newLat = markers[i].getPosition().lat()+latMovement;
	  var newLng = markers[i].getPosition().lng()+lngMovement;
	  
	  if (newLat < maxLat && newLat > minLat && newLng < maxLng && newLng > minLng)
	  {
		markers[i].setPosition({lat:newLat,lng:newLng});
	  }
	}
	  
  setTimeout (function(){
    cattleMovement();
  }, 3000);
}


function tractorMovement(){

var markerNumber = 16;
//tractor
var maxLat = 52.350736;
var minLat = 52.349976;
var maxLng = 0.37782133;
var minLng = 0.37629783;
	  var randomMultiplier = (Math.random() * 20) - 10;

	  var latMovement = 0.000001 * randomMultiplier;
	  var lngMovement = 0.000001 * randomMultiplier;
	  
	  var newLat = markers[markerNumber].getPosition().lat()+latMovement;
	  var newLng = markers[markerNumber].getPosition().lng()+lngMovement;
	  
	  if (newLat < maxLat && newLat > minLat && newLng < maxLng && newLng > minLng)
	  {
		markers[markerNumber].setPosition({lat:newLat,lng:newLng});
	  }
	  
	  setTimeout (function(){
    tractorMovement();
  }, 1000);
}
