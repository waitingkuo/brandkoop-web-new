Meteor.startup(function() {

  Template.navigation.onRendered(function() {

    $('#side-menu').metisMenu();

  });

  Template.navigation.helpers({

    websiteId() {
      return FlowRouter.getParam('websiteId');
    }


  });


});
