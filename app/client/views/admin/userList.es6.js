Meteor.startup(function() {

  Template.adminUserList.helpers({

    users() {
      return Meteor.users.find();
    },

    numOfUser() {
      return Meteor.users.find().count();
    },

    createdBy() {
      if (!!this.createdBy) {
        return this.createdBy.email;
      }
    },

    email() {
      return this.emails[0].address;
    },

    website() {
      return Websites.findOne({
        userId: this._id
      });
    },

    hasTwitter() {
      return !!Twitters.findOne({
        userId: this._id
      });
    },

    twitter() {
      return Twitters.findOne({
        userId: this._id
      });
    },

    character() {
     let character = WebsiteCharacters.findOne({
        userId: this._id
      })
      
      if (!!character) {
        character.sincerity = parseInt(character.sincerity);
        character.excitement = parseInt(character.excitement);
        character.competence = parseInt(character.competence);
        character.sophistication = parseInt(character.sophistication);
        character.ruggedness = parseInt(character.ruggedness);
        return character
      }

    },

    twitterCharacter() {
     let character = TwitterCharacters.findOne({
        userId: this._id
      })
      
      if (!!character) {
        character.sincerity = parseInt(character.sincerity);
        character.excitement = parseInt(character.excitement);
        character.competence = parseInt(character.competence);
        character.sophistication = parseInt(character.sophistication);
        character.ruggedness = parseInt(character.ruggedness);
        return character
      }

    },
    
    similarWebsites() {
      let websiteId = this._id;
      let similarities = WebsiteSimilarities.findOne({websiteId: websiteId})
      if (!!similarities) {
        //websites = []
        //for (let id of similarities.similarWebsiteIds) {
        //  websites.push(
        //}
        return _.map(similarities.similarWebsiteIds, function(e) {
          Websites.findOne({_id: e}).domain
        });

      }
    },

  });

  Template.adminUserList.events({

    'click .profile-btn': function(event) {
      let userId = this._id;
      let website = Websites.findOne({userId: userId});
      if (!!website) {
        Meteor.call('profile', website._id, function(){});
      }
    },

    'click .analyze-btn': function(event) {
      let userId = this._id;
      let website = Websites.findOne({userId: userId});
      if (!!website) {
        Meteor.call('analyze', website._id, function(){});
      }
    },

    'click .impersonate': function(event) {
      Meteor.call('adminImpersonate', this._id, function() {
        FlowRouter.go('/');
      });
    },

    'click .add-twitter': function(event) {
      let twitterScreenName = $(event.currentTarget).prev().val();
      if (twitterScreenName != '' ) {
        Twitters.insert({
          userId: this._id,
          createdByEmail: Meteor.user().emails[0].address,
          createdByUserId: Meteor.userId(),
          twitterScreenName: twitterScreenName,
        })
      }
    },

    'click .remove-twitter': function(event) {
      Twitters.remove({_id: this._id});
    },

    'submit #admin-create-user-form': function(e) {

      e.preventDefault();
      let email = $(e.target).find('#user-email').val();
      let password = $(e.target).find('#user-password').val();
      let domain = $(e.target).find('#user-domain').val();
      console.log(email, password, domain);

      if (email != '' && password != '' && domain !='') {
        Meteor.call('adminCreateUserAndWebsite', email, password, domain, function(err, result) {
          if (!err) {
            $(e.target).find('#user-email').val('');
            $(e.target).find('#user-domain').val('');
          }
        

        });
      }

    },

  });

});
