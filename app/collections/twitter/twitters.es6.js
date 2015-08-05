Twitters = new Meteor.Collection('twitters');

Twitters.attachSchema(new SimpleSchema({

  userId: {
    type: String,
    label: 'userId',
    autoValue() {
      return this.userId;
    }
  },

  twitterUserId: {
    type: String,
    label: 'Twitter User Id',
  },

  twitterScreenName: {
    type: String,
    label: 'Twitter Account Name',
  },


}));

if (Meteor.isServer) {

  Twitters.after.insert(function(userId, doc) {

    let twitterId = doc._id;

    TwitterCharacters.insert({
      userId: userId,
      twitterId: twitterId,
    });
    TwitterValues.insert({
      userId: userId,
      twitterId: twitterId,
    });
    TwitterWordclouds.insert({
      userId: userId,
      twitterId: twitterId,
    });

    //Meteor.call('profileTwitter', twitterId, function() {});
    //
    //

  });

  Twitters.after.remove(function(userId, doc) {

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

  });


  Twitters.allow({

    insert(userId, doc) {
      return !!userId;
    },

  });
}
