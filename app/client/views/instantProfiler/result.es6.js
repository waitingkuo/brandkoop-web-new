Meteor.startup(function() {

  // popup event
  Template.instantProfilerResultProfiled.onRendered(function() {
    window.onscroll = function() {
       if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight-10) {
         $('#signupPopup').modal('show');
         window.onscroll = undefined;
       }
    };

  });
  // remove popup event
  Template.instantProfilerResultProfiled.onDestroyed(function() {
    window.onscroll = undefined;
  });

  Template.instantProfilerResult.helpers({

    profile() {
      let id = FlowRouter.getParam('instantProfileId');
      return InstantProfiles.findOne(id);
    }

  });

  Template.instantProfilerResultProfiling.helpers({

    profile() {
      let id = FlowRouter.getParam('instantProfileId');
      return InstantProfiles.findOne(id);
    }

  });


  Template.instantProfilerResultProfiled.helpers({

    profile() {
      let id = FlowRouter.getParam('instantProfileId');
      return InstantProfiles.findOne(id);
    }, 

    tweetText() {
      let profileId = FlowRouter.getParam('instantProfileId');
      let profile = InstantProfiles.findOne(profileId);
      let domain = profile.domain

      let topValueObjects = _.sortBy(profile.values, 'frequency').reverse().slice(0, 5);
      topValues = _.map(topValueObjects, function(o){
        return o.trait;
      });

      let limit = 140;

      // whole sentence
      // "www.xxx.com's personality is c1, c2, c3, c4, c5. 
      //   http://www.brandkoop.com/xxxxx
      //   via @thebrandKoop

      // "www.xxx.com" url's length is 22 in twitter
      limit -= 22

      let personality = "'s personality is ";
      limit -= personality.length;

      // link in twitter is 22 ch length
      //+1 for prefix space
      //let link = ' http://www.brandkoop.com/xxxxxxx';
      let link = ' bit.ly/xxxxxxx'
      limit -= 22 + 1;

      //' Find out yours @thebrandkoop';
      //let ending = ' Find out yours';
      //limit -= ending.length;
      
      // via @thebrandKoop  (automatically generated)
      limit -= ' via @thebrandKoop'.length;
      
      let isFirst = true;
      let values = ''
      let cap = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      for (let value of topValues) {
        if (isFirst) {
          // consider space
          if (limit >= value.length + 1) {
            values += cap(value);
            isFirst = false;
            limit -= value.length + 1;
          }
        } else {
          if (limit >= value.length + 2) {
            values += ', ' + cap(value);
            limit -= value.length + 2;
          }
        }
      }
      if (!isFirst) {
        values += ' ';
      }


      //let text = domain + personality + values + link + ending;
      let text = domain + personality + values + link;

      
      return text;
    }

  });

  Template.instantProfilerResultProfiled.onDestroyed(function() {

    // remove this (a script) so 
    // next time twitter button can show correctly
    $('#twitter-wjs').remove();

  });

  Template.instantProfilerResultProfiled.onRendered(function() {

    let id = FlowRouter.getParam('instantProfileId');
    let instantProfile = InstantProfiles.findOne(id);

    Charts.makeCharacterChart('character-chart', instantProfile.character);
    Charts.makeValuesChart('values-chart', instantProfile.values, 'overall');
    $('#character-description').steps({

      headerTag: 'h3',
      bodyTag: 'section',
      titleTemplate: '#title#',
      enableFinishButton: false,
      enableAllSteps: true,
      autoFocus: false
      //transitionEffect: 'slideLeft'

    });

    $('#values-description').steps({

      headerTag: 'h3',
      bodyTag: 'section',
      titleTemplate: '#title#',
      enableFinishButton: false,
      enableAllSteps: true,
      autoFocus: false
      //transitionEffect: 'slideLeft'

    });

  });


});
