Meteor.startup(function() {

  Template.harmonyBrandcloud.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let twitterId = FlowRouter.getParam('twitterId');

    Tracker.autorun(function() {
      let website = WebsiteWordclouds.findOne({websiteId: websiteId})
      let twitter = TwitterWordclouds.findOne({twitterId: twitterId})

      if (!!website && !!twitter) {

        setTimeout(function() { // to make this page render faster
          let box = $('#website-brandcloud');
          let width = _.max([box.width(), 320]);
          let height = _.max([box.height(), 400]);
          Charts.makeWordcloud('website-brandcloud', width, height, website.words);
          Charts.makeWordcloud('twitter-brandcloud', width, height, twitter.words);
        }, 300);
      }
    });

  });

  Template.harmonyBrandcloud.helpers({

    infoData: {
      title: 'Cloud Harmony',
      descriptions: [
        "These side by side clouds display a comparison of the types of terms you're using on your website and on social media."
      ],
    },
  });

});

