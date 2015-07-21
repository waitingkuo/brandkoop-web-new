Meteor.startup(function() {

  Template.welcome2.helpers({

    websiteId() {
      return FlowRouter.getParam('websiteId');
    },

    profiled() {
      let websiteId = FlowRouter.getParam('websiteId');
      let website = Websites.findOne(websiteId);
      if (website) {
        return website.profiled;
      } else {
        return false;
      }
    }

  });

});
