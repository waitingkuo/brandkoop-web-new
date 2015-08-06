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

  Template.harmonyValues.helpers({
    infoData: {
      title: 'Values Harmony',
      descriptions: [
        "These side by side charts show the Value profiles of your website an    d social accounts. Use them to check what Values you \
        are expressing in each area."
      ],
    },
  });

});
