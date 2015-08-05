Charts = window.Charts || {};

Charts.makeCharacterChart = function(id, character, ballonType) {

  var chart = AmCharts.makeChart(id, {

    "type": "radar",

    "theme": "light",

    "dataProvider": [ {
      "criteria": "Sincerity",
      "description": LiteProfilerDescriptions.characters.sincerity,
      "score": parseInt(character.sincerity),
    }, {
      "criteria": "Excitement",
      "description": LiteProfilerDescriptions.characters.excitement,
      "score": parseInt(character.excitement)
    }, {
      "criteria": "Competence",
      "description": LiteProfilerDescriptions.characters.competence,
      "score": parseInt(character.competence)
    }, {
      "criteria": "Sophistication",
      "description": LiteProfilerDescriptions.characters.sophistication,
      "score": parseInt(character.sophistication)
    }, {
      "criteria": "Ruggedness",
      "description": LiteProfilerDescriptions.characters.ruggedness,
      "score": parseInt(character.ruggedness)
    } ],

    "valueAxes": [ {
      "axisTitleOffset": 20,
      "minimum": 0,
      "axisAlpha": 0.15
    } ],

    "startDuration": 2,

    "graphs": [ {
      "balloonText": "[[category]]: [[description]]",
      "bullet": "round",
      "valueField": "score"
    } ],

    "balloon": {
      "adjustBorderColor": true,
      "color": "#000000",
      "cornerRadius": 5,
      "fillColor": "#FFFFFF"
    },

    "categoryField": "criteria",
    "descriptionField": "description",

    "export": {
      "enabled": true
    },

  } );


};

