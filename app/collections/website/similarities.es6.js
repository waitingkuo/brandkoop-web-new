WebsiteSimilarities = new Meteor.Collection('websiteSimilarities')

WebsiteSimilarities.attachSchema(new SimpleSchema({

  websiteId: {
    type: String,
  },

  similarWebsiteIds: {
    type: [String],
  },


}));
