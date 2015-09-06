Meteor.publish('adminUserList', function() {

  if (!Roles.userIsInRole(this.userId, ['admin'])) {
    this.stop();
    return;
  }

  // should add some filters FIXME
  let users = Meteor.users.find({});
  
  let userIds = users.map( user => user._id );
  // bad performance FIXME
  let websites = Websites.find({
    userId: {
      $in: userIds
    }
  });
  let twitters = Twitters.find({
    userId: {
      $in: userIds
    }
  });

  let websiteCharacters = WebsiteCharacters.find({
    userId: {
      $in: userIds
    }
  });
  let twitterCharacters = TwitterCharacters.find({
    userId: {
      $in: userIds
    }
  });

  // FIXME should only provides those contain above websiteId
  let websiteSimilarities = WebsiteSimilarities.find({
  });

  return [users, websites, websiteCharacters, twitters, twitterCharacters, websiteSimilarities];

});

Meteor.publish('websiteList', function(){

  let websites = Websites.find({});

  let userIds = websites.map( (website) => website.userId )
  let users = Meteor.users.find({

    _id: {
      $in: userIds
    }

  });
  
  return [
    websites,
    users
  ]

});

Meteor.publish('adminInstantProfiles', function() {

  let fields = {
    domain: 1,
    character: 1,
    profiled: 1
  };
  let profiles = InstantProfiles.find({}, {fields: fields});

  return profiles;
  
});
