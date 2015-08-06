Charts = window.Charts || {};

Charts.makeValuesChart = function(id, values, criteria, type) {

  let profilerDescriptions;
  let balloonText;
  if (type === 'lite') {
    profilerDescriptions = LiteProfilerDescriptions;
    balloonText = "[[category]]: [[description]]";
  } else {
    profilerDescriptions = FullProfilerDescriptions;
    balloonText =  "";
  }

  if (criteria != 'overall') {
    values = _.filter(values, (v) => v.criteria === criteria);
  }

  let topValues = _.sortBy(values, 'frequency').reverse().slice(0, 5);

  let dataSet = [];
  for (let value of topValues) {
    dataSet.push({
      "value": value.trait,
      "score": value.frequency,
      "color": CriteriaColor[value.criteria],
      "description": LiteProfilerDescriptions.values[value.trait] || ""
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
      "balloonText": balloonText,
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

    "balloon": {
    },

    "categoryField": "value",
    "descriptionField": "description",

    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 45
    },

    "export": {
      "enabled": true
    },

  });


  if (type !== 'lite') {
    //FIXME hack, sometimes popup won't disappear 
    // maybe it's because we rollOverGraphItem before the whole thing rendered correctly
    setTimeout(function() {
      chart.addListener('rollOverGraphItem', function(event) {
        let value = event.item.dataContext.value;
        let story = Stories.findOne({value: value});
        //console.log(value);
        //console.log(story);
        Session.set('valuesTooltips:dimension', story.dimension);
        Session.set('valuesTooltips:value', story.value);
        Session.set('valuesTooltips:score', story.score);
        Session.set('valuesTooltips:descriptions', story.descriptions);
        Session.set('valuesTooltips:keywords', story.keywords);
        Session.set('valuesTooltips:phrases', story.phrases);
        Session.set('valuesTooltips:slogans', story.slogans);
        Session.set('valuesTooltips:url', story.url);
        Session.set('valuesTooltips:image', story.image);
        Session.set('valuesTooltips:title', story.title);
        $('.values-tooltips').addClass('active');
        //console.log('over');
      });
      chart.addListener('rollOutGraphItem', function(item) {
        $('.values-tooltips').removeClass('active');
        //console.log('out');
      });
    }, 1000);
  }


}
