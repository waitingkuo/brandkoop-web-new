InstantProfiles = new Meteor.Collection('instantProfiles')

InstantProfiles.attachSchema(new SimpleSchema({

  domain: {
    type: String,
    label: 'Domain',
    regEx: SimpleSchema.RegEx.Domain,
    autoValue() {
      let domain = this.value;
      
      // to remove http://
      if ( domain.match(SimpleSchema.RegEx.Url) ) {
        if (Meteor.isClient) {
          domain = new URL(domain).host;
        } else { //server
          domain = url.parse(domain).host;
        }
      }

      return domain;
    }
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
  },

  profiled: {
    type: Boolean,
    defaultValue: false
  }




}));


InstantProfiles.simpleSchema().messages({

  regEx: [
    {msg: 'Please enter correct domain, i.e. yourmain.com'}
  ]

});
  

if (Meteor.isServer) {

  InstantProfiles.allow({

    insert() {
      return true
    }

  });
}
