Meteor.startup(function() {

  Template.instantProfilerResult.helpers({

    profile() {
      let id = FlowRouter.getParam('id')
      return InstantProfiles.findOne(id)
    }

  });

  Template.instantProfilerResult.onRendered(function() {

    let chart = AmCharts.makeChart("website-values-chart", {
      "type": "serial",
      "theme": "light",
      "marginRight": 70,
      "dataProvider": [{
        "value": "down-to-earth",
        "score": 3025,
        "color": CriteriaColor.sincerity
      }, {
        "value": "daring",
        "score": 1882,
        "color": CriteriaColor.excitement
      }, {
        "value": "reliable",
        "score": 3345,
        "color": CriteriaColor.competence
      }, {
        "value": "upper class",
        "score": 2200,
        "color": CriteriaColor.sophistication
      }, {
        "value": "outdoorsy",
        "score": 1010,
        "color": CriteriaColor.ruggedness
      }],
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

  });

  
});
