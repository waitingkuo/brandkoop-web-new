Meteor.startup(function() {

  Template.harmonyCharacter.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let websiteCharacter = WebsiteCharacters.findOne({websiteId: websiteId});
    if (!!websiteCharacter) {
      setTimeout(function() { // to make this page render faster
        Charts.makeCharacterChart('website-character', websiteCharacter);
      }, 300);
    }

    let twitterId = FlowRouter.getParam('twitterId');
    let twitterCharacter = TwitterCharacters.findOne({twitterId: twitterId});
    if (!!twitterCharacter) {
      setTimeout(function() { // to make this page render faster
        Charts.makeCharacterChart('twitter-character', twitterCharacter);
      }, 300);
    }

    Popup.popupIfFirstVisit()

  });

  Template.harmonyCharacter.helpers({

    infoData: {
      title: 'Character Harmony',
      descriptions: [
        "These side by side charts show the Character profiles of your website and social accounts. It's a way to check if what you say \
        in social media really represents what your brand stands for. "
      ],   
    },

  });

});
