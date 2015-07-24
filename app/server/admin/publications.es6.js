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

  let websiteCharacters = WebsiteCharacters.find({
    userId: {
      $in: userIds
    }
  });

  return [users, websites, websiteCharacters];

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
