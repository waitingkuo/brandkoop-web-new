Meteor.startup(function() {

  Template.settings.helpers({

    hasTwitter() {
      return !!Twitters.findOne(); 
    },

    twitter() {
      return witters.findOne();
    },

  });

  Template.settings.events({

    'click #twitter-login': function() {

      Meteor.linkWithTwitter();

    },

  });

});
