Websites = new Meteor.Collection('websites');

Websites.attachSchema(new SimpleSchema({

  userId: {
    type: String,
    autoValue() {
      return this.userId
    }
  },

  domain: {
    type: String,
    label: 'Domain',
    regEx: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    autoValue() {
      console.log(this);
      console.log(this.isSet);
      if (this.isSet) {
        return this.value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/).slice(2, 4).join('.')
      }
    }
  },

  profiled: {
    type: Boolean,
    defaultValue: false
  }

}));


if (Meteor.isServer) {

  Websites.after.insert(function(userId, doc) {

    let websiteId = doc._id;

    // add website character
    WebsiteCharacters.insert({
      userId: userId,
      websiteId: websiteId
    });

    // add website values
    WebsiteValues.insert({
      userId: userId,
      websiteId: websiteId
    });

    // add brandcloud
    WebsiteWordclouds.insert({
      userId: userId,
      websiteId: websiteId
    });

    //
    Meteor.call('profile', websiteId, function(){});

  });


  Websites.after.remove(function(userId, doc) {

    let websiteId = doc._id;

    // add website character
    WebsiteCharacters.remove({
      userId: userId,
      websiteId: websiteId
    });

    // add website values
    WebsiteValues.remove({
      userId: userId,
      websiteId: websiteId
    });

    // add brandcloud
    WebsiteWordclouds.remove({
      userId: userId,
      websiteId: websiteId
    });

  });


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
