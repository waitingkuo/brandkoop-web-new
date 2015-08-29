Charts = window.Charts || {};

Charts.makeCharacterChart = function(id, character, type) {

  let profilerDescriptions;
  let balloonText;
  if (type === 'lite') {
    profilerDescriptions = LiteProfilerDescriptions;
    balloonText = "[[category]]: [[description]]";
  } else {
    profilerDescriptions = FullProfilerDescriptions;
    balloonText =  "";
  }

  let characters = [character.sincerity, character.excitement, character.competence, character.ruggedness, character.sophistication]
  if (_.max(characters) < 20 ) {
    Session.set('chart:notEnoughData', true);
  }
  //console.log(_.max(characters));

  var chart = AmCharts.makeChart(id, {

    "type": "radar",

    "theme": "light",

    "dataProvider": [ {
      "criteria": "Sincerity",
      "description": profilerDescriptions.characters.sincerity,
      "score": parseInt(character.sincerity),
    }, {
      "criteria": "Excitement",
      "description": profilerDescriptions.characters.excitement,
      "score": parseInt(character.excitement)
    }, {
      "criteria": "Competence",
      "description": profilerDescriptions.characters.competence,
      "score": parseInt(character.competence)
    }, {
      "criteria": "Sophistication",
      "description": profilerDescriptions.characters.sophistication,
      "score": parseInt(character.sophistication)
    }, {
      "criteria": "Ruggedness",
      "description": profilerDescriptions.characters.ruggedness,
      "score": parseInt(character.ruggedness)
    } ],

    "valueAxes": [ {
      "axisTitleOffset": 20,
      "minimum": 0,
      "axisAlpha": 0.15
    } ],

    "startDuration": 2,

    "graphs": [ {
      "balloonText": balloonText,
      "bullet": "round",
      "valueField": "score",
    } ],

    "balloon": {
    },

    "categoryField": "criteria",
    "descriptionField": "description",

    "export": {
      "enabled": true
    },

  } );

  if (type !== 'lite') {
    chart.addListener('rollOverGraphItem', function(event) {
      let data = event.item.dataContext;
      Session.set('characterTooltips:criteria', data.criteria);
      Session.set('characterTooltips:score', data.score);
      Session.set('characterTooltips:description', data.description);
      $('.character-tooltips').addClass('active');
      //console.log('over');
    });
    chart.addListener('rollOutGraphItem', function(item) {
      $('.character-tooltips').removeClass('active');
      //console.log('out');
    });
  }

};

