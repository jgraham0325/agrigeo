
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

    //lat: 52.35, lng: 0.3755
  var markersData= [
    ['Cattle ID 1', 52.35,0.3757, 'res/icon-cow-green.png'],
    ['Cattle ID 2', 52.35,0.3758, 'res/icon-cow-green.png'],
    ['Cattle ID 3', 52.35,0.3751, 'res/icon-cow-green.png'],
    ['Cattle ID 4', 52.35,0.3752, 'res/icon-cow-green.png'],
    ['Cattle ID 5', 52.351,0.375505, 'res/icon-cow-green.png'],
    ['Cattle ID 6', 52.351,0.375604, 'res/icon-cow-green.png'],
    ['Cattle ID 7', 52.35,0.375602, 'res/icon-cow-green.png'],
    ['Cattle ID 8', 52.35,0.3757, 'res/icon-cow-green.png'],
    ['Fence ID 1', 52.352682,0.37293971, 'res/icon-fence-green.png'],
    ['Cattle ID 10', 52.34981,0.3756, 'res/icon-cow-green.png'],
    ['Cattle ID 11', 52.34982,0.3757, 'res/icon-cow-green.png'],
    ['Cattle ID 12', 52.3498,0.3759, 'res/icon-cow-green.png'],
    ['Cattle ID 13', 52.3498,0.3753, 'res/icon-cow-green.png'],
    ['Cattle ID 14', 52.352,0.3765, 'res/icon-cow-red.png'],
    ['Cattle ID 15', 52.352,0.3735, 'res/icon-cow-green.png'],
    ['Cattle ID 16', 52.351,0.37525, 'res/icon-cow-green.png'],
    ['Tractor ID 1', 52.350329,0.37778914, 'res/icon-tractor-green.png']
  ];

    // Info Window Content
  var infoWindowContent = [
      ['<div class="info_content" style="text-align: center;">' +
      markersData[0][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-9.jpg" data-lightbox="cattle-lightbox-1"><img src="res/cow-pov-9.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[1][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-8.jpg" data-lightbox="cattle-lightbox-2"><img src="res/cow-pov-8.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[2][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-7.jpg" data-lightbox="cattle-lightbox-3"><img src="res/cow-pov-7.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[3][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-6.jpg" data-lightbox="cattle-lightbox-4"><img src="res/cow-pov-6.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[4][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-5.jpg" data-lightbox="cattle-lightbox-5"><img src="res/cow-pov-5.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[5][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-4.jpg" data-lightbox="cattle-lightbox-6"><img src="res/cow-pov-4.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[6][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-3.jpg" data-lightbox="cattle-lightbox-7"><img src="res/cow-pov-3.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
	  markersData[7][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-2.jpg" data-lightbox="cattle-lightbox-8"><img src="res/cow-pov-2.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[8][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-1.jpg" data-lightbox="cattle-lightbox-9"><img src="res/cow-pov-1.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[9][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-2.jpg" data-lightbox="cattle-lightbox-10"><img src="res/cow-pov-2.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[10][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-3.jpg" data-lightbox="cattle-lightbox-11"><img src="res/cow-pov-3.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[11][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-4.jpg" data-lightbox="cattle-lightbox-12"><img src="res/cow-pov-4.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[12][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-5.jpg" data-lightbox="cattle-lightbox-13"><img src="res/cow-pov-5.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
       markersData[13][0] + 
        '<div class="alert alert-danger">'
        + '<span class="glyphicon glyphicon-exclamation-sign"></span>' +
        '&nbsp<strong>In Labor</strong></div>' +
      '<div class="infowindow-image">'+
	  '<a href="res/cow-pov-6.jpg" data-lightbox="cattle-lightbox-14"><img src="res/cow-pov-6.jpg" style="width: 150px;"/></a></div'+
	  '<br><br><a href="#cattle" onclick="viewCattle()">View Details</a>' +
	  '</div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[14][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-7.jpg" data-lightbox="cattle-lightbox-15"><img src="res/cow-pov-7.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[15][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-8.jpg" data-lightbox="cattle-lightbox-16"><img src="res/cow-pov-8.jpg" style="width: 150px;"/></a></div></div>'],
      ['<div class="info_content" style="text-align: center;">' +
      markersData[16][0] + '<div class="infowindow-image">' +
	  '<a href="res/cow-pov-9.jpg" data-lightbox="cattle-lightbox-17"><img src="res/cow-pov-9.jpg" style="width: 150px;"/></a></div></div>'],

  ];

  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(), marker, i;

  // Loop through our array of markers & place each one on the map
  for( i = 0; i < markersData.length; i++ ) {
    var position = new google.maps.LatLng(markersData[i][1], markersData[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
          position: position,
          map: map,
          title: markersData[i][0],
          icon: markersData[i][3]
      });
    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(infoWindowContent[i][0]);
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
