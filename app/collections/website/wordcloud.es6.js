WebsiteWordclouds = new Meteor.Collection('websiteWordclouds');

WebsiteWordclouds.attachSchema(new SimpleSchema({

  userId: {
    type: String
  },

  websiteId: {
    type: String
  },

  words: {
    type: [Object],
    defaultValue: []
  }
  
}));
