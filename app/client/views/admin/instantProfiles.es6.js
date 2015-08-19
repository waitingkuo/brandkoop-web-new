Meteor.startup(function() {

  Template.adminInstantProfiles.helpers({

    numberOfProfilers() {
      return InstantProfiles.find({}).count();
    },

    profiles() {
      return InstantProfiles.find({});
    },

    link() {
      return "/instantProfiler/result/" + this._id;
    }

  });

  Template.adminInstantProfiles.events({

    'click .view-btn': function(event) {

    },

    'click .profile-btn': function(event) {
      let profileId = this._id;
      Meteor.call('instantProfile', profileId, function() {});
    },

  });


});
