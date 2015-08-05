Meteor.startup(function() {

  Template.signupPopup.events({

    'click #signupBtn': function(e) {
      e.preventDefault();
      $('#signupPopup').modal('hide');
      FlowRouter.go('/signup');
    },

  });

});
