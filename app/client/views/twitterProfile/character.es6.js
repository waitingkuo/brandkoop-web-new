Meteor.startup(function() {

  Template.twitterCharacter.onRendered(function() {

    let twitterId = FlowRouter.getParam('twitterId');
    let character = TwitterCharacters.findOne({twitterId: twitterId});
    if (!!character) {

      setTimeout(function() { // to make this page render faster
        Charts.makeCharacterChart('character', character);
      }, 300);

    }

  });

});

