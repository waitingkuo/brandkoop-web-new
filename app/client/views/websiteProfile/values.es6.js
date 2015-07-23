Meteor.startup(function() {

  Template.websiteValues.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let values = WebsiteValues.findOne({websiteId: websiteId}).traits;

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
