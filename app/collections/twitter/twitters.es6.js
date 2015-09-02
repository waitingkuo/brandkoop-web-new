Twitters = new Meteor.Collection('twitters');

Twitters.attachSchema(new SimpleSchema({

  userId: {
    type: String,
    label: 'userId',
    //autoValue() {
    //  console.log(this.userId);
    //  return this.userId;
    // }
  },

  twitterUserId: {
    type: String,
    label: 'Twitter User Id',
    optional: true,
  },

  twitterScreenName: {
    type: String,
    label: 'Twitter Account Name',
  },

  createdByUserId: {
    type: String,
    label: 'Created By User Id',
    optional: true,
  },
  createdByEmail: {
    type: String,
    label: 'Created By Email',
    optional: true,
  },

  accessToken: {
    type: String,
    optional: true,
  },

  accessTokenSecret: {
    type: String,
    optional: true,
  },


}));

if (Meteor.isServer) {

  Twitters.after.insert(function(userId, doc) {

    let twitterId = doc._id;

    // FIXME
    // onLogin cannot get userId currently
    let myUserId = doc.userId;

    TwitterCharacters.insert({
      userId: myUserId,
      twitterId: twitterId,
    });
    TwitterValues.insert({
      userId: myUserId,
      twitterId: twitterId,
    });
    TwitterWordclouds.insert({
      userId: myUserId,
      twitterId: twitterId,
    });

    Meteor.call('profileTwitter', twitterId, function() {});
    //
    //

  });

  Twitters.after.remove(function(userId, doc) {

    let twitterId = doc._id;

    TwitterCharacters.remove({
      userId: userId,
      twitterId: twitterId,
    });
    TwitterValues.remove({
      userId: userId,
      twitterId: twitterId,
    });
    TwitterWordclouds.remove({
      userId: userId,
      twitterId: twitterId,
    });
    Meteor.users.update({_id: userId}, {$unset: {'services.twitter': 1}})

  });


  Twitters.allow({

    insert(userId, doc) {
      // some times its added by admin..
      if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        return true
      }
      return userId === Meteor.userId();
    },

    remove(userId, doc) {
      if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        return true
      }
      return userId === doc.userId;
    },

  });
}
