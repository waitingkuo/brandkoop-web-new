Meteor.startup(function() {

  Template.twitterValues.onRendered(function() {

    let twitterId = FlowRouter.getParam('twitterId');
    let values = TwitterValues.findOne({twitterId: twitterId}).traits;

    setTimeout(function() { // to make this page render faster
      Charts.makeValuesChart('overall', values, 'overall');
      Charts.makeValuesChart('sincerity', values, 'sincerity');
      Charts.makeValuesChart('excitement', values, 'excitement');
      Charts.makeValuesChart('competence', values, 'competence');
      Charts.makeValuesChart('sophistication', values, 'sophistication');
      Charts.makeValuesChart('ruggedness', values, 'ruggedness');
    }, 300);

  });

  Template.twitterValues.helpers({

    popupData: {
      title: 'Social Values',
      descriptions: [
        "These charts breakdown the 5 brand characters into the specific core values contained in each one. Hover over the bars for a closer look at each value.",
        "",
        "Click the information icon (i) for more details.",
      ]     
    },

    infoData: {
      imageUrl: '/images/info/values.png',
      imageWidth: '500',
      title: 'Social Values',
      descriptions: [
        'This score represents the number of times a Competent \
        language phrase from our Brand Value Dictionary was \
        used on your website. This could be a phrase like, "Burn \
        the Midnight Oil" (BTW a great Aussie band!) or simply a \
        word like "triumphant".'
      ],
    },

  });

});

