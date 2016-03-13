function getDate(daysAgo) {
  date = new Date();
  date = date.setDate(date.getDate()-daysAgo);
  return (date);
}
function initCharts() {
  initCattleHeartBeatChart();
  initCattleTemperatureChart();
}
function initCattleHeartBeatChart(){
  	var traces = [];
    var statsArray = [];
    statsArray = [
      {
        x : getDate(6),
        y : 57.0
      },
      {
        x : getDate( 5),
        y : 59.0
      },
      {
        x : getDate( 4),
        y : 62.0
      },
      {
        x : getDate( 3),
        y : 65.0
      },
      {
        x : getDate( 2),
        y : 64.0
      },
      {
        x : getDate( 1),
        y : 95.0
      }
    ];

  	traces.push({
  		values	: statsArray,
  		key			:	'Heart Rate',
  		color		: '#d9534f'
  	});

  	nv.addGraph(function() {

  	 	var chart = nv.models.lineChart()
  			          .useInteractiveGuideline(true)
  			          .showLegend(false)
  			          .showYAxis(true)
  			          .showXAxis(true);

      chart.xAxis     //Chart x-axis settings
          .axisLabel('Date')
          .tickFormat(function(value) {
            var format = "%_d/%_m";
            return d3.time.format(format)(new Date(value));
      });
      chart.yAxis     //Chart y-axis settings
            .axisLabel('Avg BPM');

  	 d3.select('svg#heart-beat-chart')
  		 .datum(traces)
  		  .call(chart);

  	  //Update the chart when window resizes.
  	  nv.utils.windowResize(function() { chart.update() });
  	  return chart;
    });
}
function initCattleTemperatureChart(){
  	var traces = [];
    var statsArray = [];
    statsArray = [
      {
        x : getDate( 6),
        y : 38.6
      },
      {
        x : getDate( 5),
        y : 37.5
      },
      {
        x : getDate( 4),
        y : 36.2
      },
      {
        x : getDate( 3),
        y : 36.3
      },
      {
        x : getDate( 2),
        y : 36.2
      },
      {
        x : getDate( 1),
        y : 40.5
      }
    ];

  	traces.push({
  		values	: statsArray,
  		key			:	'Temperature',
  		color		: '#d9534f'
  	});

  	nv.addGraph(function() {

  	 	var chart = nv.models.lineChart()
  			          .useInteractiveGuideline(true)
  			          .showLegend(false)
  			          .showYAxis(true)
  			          .showXAxis(true);

      chart.xAxis     //Chart x-axis settings
          .axisLabel('Date')
          .tickFormat(function(value) {
            var format = "%_d/%_m";
            return d3.time.format(format)(new Date(value));
      });
      chart.yAxis     //Chart y-axis settings
            .axisLabel('Average Temperature');

  	 d3.select('svg#temperature-chart')
  		 .datum(traces)
  		  .call(chart);

  	  //Update the chart when window resizes.
  	  nv.utils.windowResize(function() { chart.update() });
  	  return chart;
    });
}
