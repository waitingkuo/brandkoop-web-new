WebsiteCharacters = new Meteor.Collection('websiteCharacters');

WebsiteCharacters.attachSchema(new SimpleSchema({

  userId: {
    type: String
  },

  websiteId: {
    type: String
  },

  sincerity: {
    type: Number,
    defaultValue: 0
  },
  
  excitement: {
    type: Number,
    defaultValue: 0
  },
  
  competence: {
    type: Number,
    defaultValue: 0
  },
  
  sophistication: {
    type: Number,
    defaultValue: 0
  },
  
  ruggedness: {
    type: Number,
    defaultValue: 0
  }

}));

HistoricalWebsiteCharacters = new Meteor.Collection('historicalWebsiteCharacters');

HistoricalWebsiteCharacters.attachSchema(new SimpleSchema({

  websiteId: {
    type: String
  },

  sincerity: {
    type: Number,
    defaultValue: 0
  },
  
  excitement: {
    type: Number,
    defaultValue: 0
  },
  
  competence: {
    type: Number,
    defaultValue: 0
  },
  
  sophistication: {
    type: Number,
    defaultValue: 0
  },
  
  ruggedness: {
    type: Number,
    defaultValue: 0
  },

  time: {
    type: Date,
  },

}));
