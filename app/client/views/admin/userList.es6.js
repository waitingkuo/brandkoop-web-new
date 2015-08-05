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

    }
    
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
