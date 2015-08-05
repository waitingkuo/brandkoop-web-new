TwitterValues = new Meteor.Collection('twitterValues');

TwitterValues.attachSchema(new SimpleSchema({

  userId: {
    type: String
  },

  twitterId: {
    type: String
  },

  traits: {
    type: [Object],
    defaultValue: []
  }

}));

