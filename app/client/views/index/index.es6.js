Meteor.startup(function() {

  Template.index.helpers({
  
    slack: {
      name: 'Slack',
      img: '/images/index/slack.png',
      valuesChartImg: '/images/index/slack-values.png'
    }, 

    blueBottle: {
      name: 'Blue Bottle',
      img: '/images/index/blue-bottle.png',
      valuesChartImg: '/images/index/slack-values.png'
    }, 

    honest: {
      name: 'Honest',
      img: '/images/index/honest.jpeg',
      valuesChartImg: '/images/index/slack-values.png'
    },

    hillaryClinton: {
      name: 'Hillary Clinton',
      img: '/images/index/hillary-clinton.jpeg',
      valuesChartImg: '/images/index/slack-values.png'
    },

    redBull: {
      name: 'Red Bull',
      img: '/images/index/red-bull.png',
      valuesChartImg: '/images/index/slack-values.png'
    }


  });


});

AutoForm.hooks({
  insertInstantProfileForm: {
    onSubmit(insertDoc) {

      this.event.preventDefault();
      Meteor.call('insertInstantProfile', insertDoc.domain, function(err, result) {
        if (!err) {
          let id = result;
          FlowRouter.go('/instantProfiler/result/'+id); 
        }
      });

      // return false is same as preventDefault
    }
  }
});



