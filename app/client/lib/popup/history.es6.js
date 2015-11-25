Meteor.startup(function() {

  Template.history.helpers({

    historicalCharacters() {
      let websiteId = Session.get('adminUserList:websiteId');
      Meteor.subscribe('historicalWebsiteCharacter', websiteId);
      return HistoricalWebsiteCharacters.find({
        websiteId: websiteId,
      });
    }

  });

});
