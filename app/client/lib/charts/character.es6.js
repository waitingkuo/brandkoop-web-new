Charts = window.Charts || {};

Charts.makeCharacterChart = function(id) {

  var chart = AmCharts.makeChart(id, {
    "type": "radar",
    "theme": "light",
    "dataProvider": [ {
      "criteria": "Sincerity",
      "score": 156
    }, {
      "criteria": "Excitement",
      "score": 100
    }, {
      "criteria": "Competence",
      "score": 320
    }, {
      "criteria": "Sophistication",
      "score": 30
    }, {
      "criteria": "Ruggedness",
      "score": 200
    } ],
    "valueAxes": [ {
      "axisTitleOffset": 20,
      "minimum": 0,
      "axisAlpha": 0.15
    } ],
    "startDuration": 2,
    "graphs": [ {
      "balloonText": "[[category]]: [[value]]",
      "bullet": "round",
      "valueField": "score"
    } ],
    "categoryField": "criteria",
    "export": {
      "enabled": true
    }
  } );


};

