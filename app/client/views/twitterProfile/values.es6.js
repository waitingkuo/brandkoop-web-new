Meteor.startup(function() {

  Template.twitterValues.onRendered(function() {

    let twitterId = FlowRouter.getParam('twitterId');
    let values = TwitterValues.findOne({twitterId: twitterId}).traits;

    setTimeout(function() { // to make this page render faster
      Charts.makeValuesChart('overall', values, 'overall');
      Charts.makeValuesChart('sincerity', values, 'sincerity');
      Charts.makeValuesChart('excitement', values, 'excitement');
      Charts.makeValuesChart('competence', values, 'competence');
      Charts.makeValuesChart('sophistication', values, 'sophistication');
      Charts.makeValuesChart('ruggedness', values, 'ruggedness');
    }, 300);

  });

});

