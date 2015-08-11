Meteor.startup(function() {

  Template.index.onDestroyed(function() {
    $('#twitter-wjs').remove();
  });
  Template.index.helpers({

    slack: {
      name: 'Slack',
      img: '/images/index/slack.png',
      valuesChartImg: '/images/index/slack-values.png',
      domain: 'slack.com'
    },

    blueBottle: {
      name: 'Blue Bottle',
      img: '/images/index/blue-bottle.png',
      valuesChartImg: '/images/index/blue-bottle-values.png',
      domain: 'bluebottlecoffee.com'
    },

    honest: {
      name: 'Honest',
      img: '/images/index/honest.jpeg',
      valuesChartImg: '/images/index/honest-values.png',
      domain: 'www.honest.com'
    },

    hillaryClinton: {
      name: 'Hillary Clinton',
      img: '/images/index/hillary-clinton.jpeg',
      valuesChartImg: '/images/index/hillary-clinton-values.png',
      domain: 'www.hillaryclinton.com'
    },

    redBull: {
      name: 'Red Bull',
      img: '/images/index/red-bull.png',
      valuesChartImg: '/images/index/red-bull-values.png',
      domain: 'www.redbull.com'
    }


  });

  Template.exampleProfile.events({

    'click .see-profile': function(event) {

      event.preventDefault();

      // Hack FIXME
      Meteor.call('insertInstantProfile', this.domain, false, '', '', function(err, result) {
        if (!err) {
          let id = result;
          FlowRouter.go('/instantProfiler/result/'+id);
        }
      });

    }

  });


});

AutoForm.hooks({
  insertInstantProfileForm: {
    onSubmit(insertDoc) {

      let domain = insertDoc.domain;
      if (domain.indexOf('//') > -1) {
        insertDoc.domain = domain.split('//')[1];
      }

      this.event.preventDefault();

      let uuid = $.cookie('instanProfilerBrowerUUID')
      if (!uuid) {
        uuid = Random.id();
        $.cookie('instanProfilerBrowerUUID');
      }   

      let ip = headers.getClientIP();

      Meteor.call('insertInstantProfile', insertDoc.domain, true, ip, uuid, function(err, result) {
        if (!err) {
          if (result === 'limited') {

            FlowRouter.go('/instantProfiler/limited');

          } else {
            let id = result;
            FlowRouter.go('/instantProfiler/result/'+id);
          }
        }
      });

      // return false is same as preventDefault
    }
  }
});



