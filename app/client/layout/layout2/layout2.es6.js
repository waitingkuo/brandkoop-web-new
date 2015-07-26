Meteor.startup(function() {

  Template.layout2.onCreated(function() {
    $('body').addClass('top-navigation');
  });

  Template.layout2.onRendered(function() {
    $('body').addClass('top-navigation');
  });


  Template.layout2.onDestroyed(function() {
    $('body').removeClass('top-navigation');
  });

  Template.layout2.events({

    'click #signout': function() {
      Meteor.logout(function() {
        FlowRouter.go('/');
      });
    }

  });

});
