Meteor.startup(function() {

  Template.settings.helpers({

    hasTwitter() {
      return !!Twitters.findOne(); 
    },

    twitter() {
      return Twitters.findOne();
    },

  });

  Template.settings.events({

    'click #twitterLogin': function() {

      Meteor.linkWithTwitter();

    },

    'click #resetTwitter': function() {
      let twitter = Twitters.findOne();
      Twitters.remove(twitter._id);
    },

    'click #resetPopupWindow': function() {
      Popup.resetAllCookies()
    },


  });

});
