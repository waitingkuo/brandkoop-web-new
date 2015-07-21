Meteor.startup(function() {

  Meteor.publish('userWebsites', function() {

    websites = Websites.find({
      userId: this.userId
    });

    return websites;

  });

  Meteor.publish('website', function(websiteId) {

    website = Websites.find({
      _id: websiteId,
      userId: this.userId
    });

    return website;

  });


});
