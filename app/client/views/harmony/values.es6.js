Meteor.startup(function() {

  Template.harmonyValues.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let website = WebsiteValues.findOne({websiteId: websiteId});

    let twitterId = FlowRouter.getParam('twitterId');
    let twitter = TwitterValues.findOne({twitterId: twitterId});

    if (!!website && !!twitter) {
      setTimeout(function() { // to make this page render faster
        Charts.makeValuesChart('website-overall', website.traits, 'overall');
        Charts.makeValuesChart('twitter-overall', twitter.traits, 'overall');
      }, 300);
    }

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
