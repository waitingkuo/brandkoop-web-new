Meteor.startup(function() {

  Template.navigation.onRendered(function() {

    $('#side-menu').metisMenu();

  });

  Template.navigation.helpers({

    websiteId() {
      let website =  Websites.findOne()
      if (website) {
        return website._id;
      }
    }


  });


});
