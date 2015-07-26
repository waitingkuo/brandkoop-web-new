Meteor.startup(function() {

  Meteor.publish('instantProfile', function(profileId) {

    let profile = InstantProfiles.find({_id: profileId});
    return profile;

  });
  
  Meteor.publish('userWebsites', function() {

    websites = Websites.find({
      userId: this.userId
    });

    return websites;

  });

  Meteor.publish('website', function(websiteId) {

    let website = Websites.find({
      _id: websiteId,
      userId: this.userId
    });

    return website;

  });

  Meteor.publish('websiteCharacter', function(websiteId) {

    let websiteCharacter = WebsiteCharacters.find({
      websiteId: websiteId,
      userId: this.userId
    });

    return websiteCharacter;

  });

  Meteor.publish('websiteValue', function(websiteId) {

    let websiteValue = WebsiteValues.find({
      websiteId: websiteId,
      userId: this.userId
    });

    return websiteValue;

  });

  Meteor.publish('websiteWordcloud', function(websiteId) {

    let websiteWordcloud = WebsiteWordclouds.find({
      websiteId: websiteId,
      userId: this.userId
    });

    return websiteWordcloud;

  });


});
