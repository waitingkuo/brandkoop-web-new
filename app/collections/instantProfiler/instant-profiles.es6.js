InstantProfiles = new Meteor.Collection('instantProfiles')

InstantProfiles.attachSchema(new SimpleSchema({

  domain: {
    type: String,
    label: 'Domain',
    regEx: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    /*
    autoValue() {
      if (this.isSet) {
        return this.value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/).slice(2, 4).join('.')
      }
    }
    */
  },

  character: {
    type: Object,
    defaultValue: {}
  },

  values: {
    type: [Object],
    defaultValue: []
  }




}));


InstantProfiles.simpleSchema().messages({

  regEx: [
    {msg: 'Please enter correct domain, i.e. yourmain.com'}
  ]

});
  

if (Meteor.isServer) {
  InstantProfiles.allow({

    insert: () => { true }

  });
}
