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

    popupData: {
      title: 'Website Character',
      descriptions: [
        "This chart shows your website's overall character. See what type of brand you are. Hover over the chart for your score and explanation of the 5 brand characters.",
        "",
        "Click the Information icon (i) for more details.",
      ]
    },

    infoData: {
      imageUrl: '/images/info/character.png',
      imageWidth: '300',
      title: 'Website Character',
      descriptions: [
        "This score represents the number of times a \
Competence Value was detected in the content of \
your website. Competence values include Reliable, \
Hardworking, and Confident to name a few. The \
number of Values detected add up to an overall \
Character score."
      ],
    }

  });

});
