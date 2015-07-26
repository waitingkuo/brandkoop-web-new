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
    }

  });

  Template.instantProfilerResultProfiled.onRendered(function() {

    let id = FlowRouter.getParam('instantProfileId');
    let instantProfile = InstantProfiles.findOne(id);

    Charts.makeCharacterChart('character', instantProfile.character);
    Charts.makeValuesChart('values', instantProfile.values, 'overall');

  });


});
