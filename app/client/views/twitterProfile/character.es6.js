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

  Template.twitterCharacter.helpers({
    popupData: {
      title: 'Social Character',
      descriptions: [
        "This chart shows your overall character according to your Tweets. See what type of brand you are. Hover over the chart for your score and explanation of the 5 brand characters.",
        "",
        "Click the information icon (i) for more details.",
      ]   
    },

    infoData: {
      imageUrl: '/images/info/character.png',
      imageWidth: '300',
      title: 'Social Character',
      descriptions: [
        "This score represents the number of times a \
Competence Value was detected in the content of \
your website. Competence values include Reliable, \
Hardworking, and Confident to name a few. The \
number of Values detected add up to an overall \
Character score.",
      ],
    },

  });

});

