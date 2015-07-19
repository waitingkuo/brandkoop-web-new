Meteor.startup(function() {

  Template.instantProfilerResult.helpers({

    profile() {
      id = FlowRouter.getParam('id')
      return InstantProfiles.findOne(id)
    }

  });
  
});
