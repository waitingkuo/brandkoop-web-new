Meteor.startup(function() {

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
      let topValues = 'Friendly, Friendly, Friendly, Friendly, Friendly'

      let text = domain + "'s personality is " + topValues + ' bit.ly/xxxxxxx' + ' Find out yours @thebrandkoop';
      console.log(text);

      return text;
    }

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
