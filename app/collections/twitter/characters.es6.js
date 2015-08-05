TwitterCharacters = new Meteor.Collection('twitterCharacters');

TwitterCharacters.attachSchema(new SimpleSchema({

  userId: {
    type: String
  },

  twitterId: {
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
