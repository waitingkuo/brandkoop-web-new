Charts = window.Charts || {};

Charts.makeValuesChart = function(id, values, criteria) {

  if (criteria != 'overall') {
    values = _.filter(values, (v) => v.criteria === criteria);
  }

  console.log(criteria);
  console.log(values.length);
  let topValues = _.sortBy(values, 'frequency').reverse().slice(0, 5);
  console.log(topValues.length);

  let dataSet = [];
  for (let value of topValues) {
    dataSet.push({
      "value": value.trait,
      "score": value.frequency,
      "color": CriteriaColor[value.criteria]
    });
  }


  // the name of each field are different between chart and  profiler
  // so we need to convert

  let chart = AmCharts.makeChart(id, {
    "type": "serial",
    "theme": "light",
    "marginRight": 70,
    "dataProvider": dataSet,
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left",
      "title": "Scores for top values"
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<b>[[category]]: [[value]]</b>",
      "fillColorsField": "color",
      "fillAlphas": 0.9,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "score"
    }],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "value",
    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 45
    },
    "export": {
      "enabled": true
    }

  });

}

