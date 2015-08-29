Meteor.startup(function() {

  Template.notEnoughDataAlert.helpers({
    isNotEnoughData() {
      return Session.get('chart:notEnoughData');
    }
});
  
});
