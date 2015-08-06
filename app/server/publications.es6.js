Meteor.startup(function() {

  Meteor.publish('stories', function() {
    return Stories.find({});
  });

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
  Meteor.publish('userTwitters', function() {

    twitters = Twitters.find({
      userId: this.userId
    });

    return twitters;

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

  Meteor.publish('twitterCharacter', function(twitterId) {

    let twitterCharacter = TwitterCharacters.find({
      twitterId: twitterId,
      userId: this.userId
    });

    return twitterCharacter;

  });

  Meteor.publish('twitterValues', function(twitterId) {

    let twitterValue = TwitterValues.find({
      twitterId: twitterId,
      userId: this.userId
    });

    return twitterValue;

  });

  Meteor.publish('twitterWordcloud', function(twitterId) {

    let twitterWordcloud = TwitterWordclouds.find({
      twitterId: twitterId,
      userId: this.userId
    });

    return twitterWordcloud;

  });


});
