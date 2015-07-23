Meteor.startup(function() {

  Template.navigation.onRendered(function() {

    $('#side-menu').metisMenu();

  });

  Template.navigation.helpers({

    websiteId() {
      let website =  Websites.findOne()
      if (!!website) {
        return website._id;
      }
    }, 

    user() {
      let user = Meteor.user();
      if (!!user) {
        return user.emails[0].address;
      }
    },

    website() {
      let website =  Websites.findOne()
      if (!!website) {
        return website.domain;
      }
    }

  });


});
