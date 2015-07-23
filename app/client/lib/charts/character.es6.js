Charts = window.Charts || {};

Charts.makeCharacterChart = function(id, character) {

  var chart = AmCharts.makeChart(id, {
    "type": "radar",
    "theme": "light",
    "dataProvider": [ {
      "criteria": "Sincerity",
      "score": character.sincerity
    }, {
      "criteria": "Excitement",
      "score": character.excitement
    }, {
      "criteria": "Competence",
      "score": character.competence
    }, {
      "criteria": "Sophistication",
      "score": character.sophistication
    }, {
      "criteria": "Ruggedness",
      "score": character.ruggedness
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

