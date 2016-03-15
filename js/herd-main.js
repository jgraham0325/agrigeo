var markers = [];

function viewCattle() {
  $("#herd-view").fadeOut(function(){
      initCharts();
      $("#map-id-14").show();
      $("#cattle-view").fadeIn('slow');
  });
}

function viewHerd() {
  $("#cattle-view").fadeOut(function(){
      $("#herd-view").fadeIn('slow');
  });
}
function heartbeat() {
  var min = 85;
  var max = 100;
  var ran = Math.floor(Math.random() * (max-min + 1)) + min;
  $("#cattle-bpm").html(ran + " BPM");

  if (ran > 95) {
    $("#cattle-bpm-container").removeClass("alert-warning");
    $("#cattle-bpm-container").addClass("alert-danger");
  } else {
    $("#cattle-bpm-container").removeClass("alert-danger");
    $("#cattle-bpm-container").addClass("alert-warning");
  }

  setTimeout (function(ran){
    heartbeat(ran);
  }, 2000);
}
	

function startAjaxCalls() {
  setInterval(function(){
    requestOpenClosedStatus(function(data) {
      if (data.message[0].payload.metrics.metric != undefined) {
        var metrics = getMetrics(data.message[0].payload.metrics.metric);
        if (metrics.opened == "true") {
          $("#cattle-upright-container").removeClass("alert-success");
          $("#cattle-upright-container").addClass("alert-danger");
          $("#cattle-upright").html("Upside Down");
        } else {
          $("#cattle-upright-container").removeClass("alert-danger");
          $("#cattle-upright-container").addClass("alert-success");
          $("#cattle-upright").html("Upright");
        }
      }
    });
    requestTemperatureStatus(function(data) {
      var metrics = getMetrics(data.message[0].payload.metrics.metric);
      if (data.message[0].payload.metrics.metric != undefined) {
        var metrics = getMetrics(data.message[0].payload.metrics.metric);
        var f = parseFloat(metrics.temperature);
        var temperature = (5/9) * (f-32);
        if (metrics.temperature > 32 || metrics.temperature < 26) {
          $("#cattle-temp-container").removeClass("alert-success");
          $("#cattle-temp-container").addClass("alert-danger");
        } else {
          $("#cattle-temp-container").removeClass("alert-danger");
          $("#cattle-temp-container").addClass("alert-success");
        }
        $("#cattle-temp").html(temperature.toFixed(1) + " &#8451")
      }
    });
  }, REFRESH_RATE);
}

$(document).ready(function() {
  interactiveLogin(function() {
    $("#main-display").fadeIn();
    $("#account-id").html(account);
    $("#account-display").show();
    initMap();
    heartbeat();
	cattleMovement();
	tractorMovement();
    startAjaxCalls();
  });
});
