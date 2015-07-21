Websites = new Meteor.Collection('websites');

Websites.attachSchema(new SimpleSchema({

  userId: {
    type: String,
    autoValue() {
      //FIXME
      return this.userId
    }
  },

  domain: {
    type: String,
    label: 'Domain',
    regEx: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    autoValue() {
      if (this.isSet) {
        this.value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/).slice(2, 4).join('.')
      }
    }
  },

  profiled: {
    type: Boolean,
    defaultValue: false
  }

}));


if (Meteor.isServer) {

  Websites.allow({

    insert(userId, doc) {
      return !!userId;
    },

    //remove(userId, doc) {
    //  return userId === doc.userId;
    //},

    //update(userId, doc, fieldName, modifier) {
    //}

  });
}
