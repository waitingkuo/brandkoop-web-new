WebsiteValues = new Meteor.Collection('websiteValues');

WebsiteValues.attachSchema(new SimpleSchema({

  userId: {
    type: String
  },

  websiteId: {
    type: String
  },

  traits: {
    type: [Object],
    defaultValue: []
  }

}));

