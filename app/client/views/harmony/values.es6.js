Meteor.startup(function() {

  Template.harmonyValues.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let websiteValues = WebsiteValues.findOne({websiteId: websiteId}).traits;

    let twitterId = FlowRouter.getParam('twitterId');
    let twitterValues = TwitterValues.findOne({twitterId: twitterId}).traits;

    setTimeout(function() { // to make this page render faster
      Charts.makeValuesChart('website-overall', websiteValues, 'overall');
      Charts.makeValuesChart('twitter-overall', twitterValues, 'overall');
    }, 300);

  });

});
