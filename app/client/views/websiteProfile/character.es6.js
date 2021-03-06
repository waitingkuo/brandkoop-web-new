Meteor.startup(function() {

  Template.websiteCharacter.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let character = WebsiteCharacters.findOne({websiteId: websiteId});
    if (!!character) {

      setTimeout(function() { // to make this page render faster
        Charts.makeCharacterChart('character', character);
      }, 300);

    }

    Popup.popupIfFirstVisit()

  });

  Template.websiteCharacter.helpers({

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
