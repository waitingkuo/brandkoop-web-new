Meteor.startup(function() {

  Template.websiteCharacter.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let character = WebsiteCharacters.findOne({websiteId: websiteId});
    if (!!character) {

      setTimeout(function() { // to make this page render faster
        Charts.makeCharacterChart('character', character);
      }, 300);

    }

  });

});
