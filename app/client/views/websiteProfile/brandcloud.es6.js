Meteor.startup(function() {

  Template.websiteBrandcloud.onRendered(function() {

    let websiteId = FlowRouter.getParam('websiteId');
    let words = WebsiteWordclouds.findOne({websiteId: websiteId}).words;
    if (!!words) {

      setTimeout(function() { // to make this page render faster
        let box = $('.ibox-content');
        let width = _.max([box.width(), 320]);
        let height = _.max([box.height(), 400]);
        Charts.makeWordcloud('brandcloud', width, height, words);
      }, 0);

    }

  });

  Template.websiteBrandcloud.helpers({
    popupData: {
      title: 'Website Cloud',
      descriptions: [
        "These are the most relevant key terms that make up the personality of your brand from the content analyzed on your website.",
        "",
        "Click (information icon) for more details.",
      ],
    }, 

    infoData: {
      title: 'Website Cloud',
      descriptions: [
        "The color of each word represents whatoverall Character it belongs to.",
          "Red=Excitement",
          "Purple=Sophistication",
          "Yellow=Competence",
          "Blue=Sincerity",
          "Brown=Ruggedness",
          "The size of the word indicates the frequency of use in your website.",
          "<span class='big-font'>(Big Word)</span> Used a lot",
          "<span class='small-font'>(Small Word)</span> Used a little",
      ] ,
    },


  });

});

