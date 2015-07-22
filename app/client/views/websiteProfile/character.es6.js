Meteor.startup(function() {

  Template.websiteCharacter.onRendered(function() {

    setTimeout(function() { // to make this page render faster

      Charts.makeCharacterChart('character');

    }, 300);

  });

});
