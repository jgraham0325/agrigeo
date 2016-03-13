var REQ_URL_POST = "https://api-sandbox.everyware-cloud.com/v2/messages/publish";
var REQ_URL_GET = "https://api-sandbox.everyware-cloud.com/v2/messages/";
var REQ_URL_GET_TOPICS = "https://api-sandbox.everyware-cloud.com/v2/topics/";
var REFRESH_RATE = 2000;

function requestOpenClosedStatus (cb) {

  var topic = account + "/+/monnit/openClosed/#"
  $.ajax({
      url 			: REQ_URL_GET + "searchByTopic.json",
      data 			: {
        topic 	 : topic,
        limit 	 : 1
      },
      dataType		: "json",
      beforeSend 	: function(req) {
        req.setRequestHeader('Authorization', "Basic "
            + btoa(username + ":" + password))
      }
    }).done(cb);
}


function requestTemperatureStatus (cb) {

  var topic = account + "/+/monnit/temperature/#"
  $.ajax({
      url 			: REQ_URL_GET + "searchByTopic.json",
      data 			: {
        topic 	 : topic,
        limit 	 : 1
      },
      dataType		: "json",
      beforeSend 	: function(req) {
        req.setRequestHeader('Authorization', "Basic "
            + btoa(username + ":" + password))
      }
    }).done(cb);
}
