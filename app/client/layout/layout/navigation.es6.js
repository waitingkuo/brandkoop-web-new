Meteor.startup(function() {

  Template.navigation.onRendered(function() {

    $('#side-menu').metisMenu();

  });



});
