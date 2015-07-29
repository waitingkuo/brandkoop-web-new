Charts = window.Charts || {};

Charts.makeCharacterChart = function(id, character) {

  var chart = AmCharts.makeChart(id, {
    "type": "radar",
    "theme": "light",
    "dataProvider": [ {
      "criteria": "Sincerity",
      "score": parseInt(character.sincerity)
    }, {
      "criteria": "Excitement",
      "score": parseInt(character.excitement)
    }, {
      "criteria": "Competence",
      "score": parseInt(character.competence)
    }, {
      "criteria": "Sophistication",
      "score": parseInt(character.sophistication)
    }, {
      "criteria": "Ruggedness",
      "score": parseInt(character.ruggedness)
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

