Meteor.startup(function() {

  Template.websiteBrandcloud.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let words = WebsiteWordclouds.findOne({websiteId: websiteId}).words;
    if (!!words) {

      setTimeout(function() { // to make this page render faster
        Charts.makeWordcloud('brandcloud', 600, 400, words);
      }, 0);

    }

  });

});

