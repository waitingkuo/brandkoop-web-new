Meteor.startup(function() {

  Template.characterTooltips.helpers({

    criteria() {
      return Session.get('characterTooltips:criteria');
    },

    score() {
      return Session.get('characterTooltips:score');
    },

    description() {
      return Session.get('characterTooltips:description');
    },

  });

});
