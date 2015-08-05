TwitterWordclouds = new Meteor.Collection('twitterWordclouds');

TwitterWordclouds.attachSchema(new SimpleSchema({

  userId: {
    type: String
  },

  twitterId: {
    type: String
  },

  words: {
    type: [Object],
    defaultValue: []
  }
  
}));
