Meteor.methods({

  adminCreateUserAndWebsite(email, password, domain) {

    if (!Roles.userIsInRole(this.userId, ['admin'])) {
      return
    }

    let adminUserId = this.userId;
    let adminUser = Meteor.users.findOne({_id: adminUserId});

    userId = Accounts.createUser({
      email: email,
      password: password,
      createdBy: {
        userId: adminUser.userId,
        email: adminUser.emails[0].address
      }
    })

    if (!userId) {
      throw new Meteor.Error('failed to create user')
    }

    // autoValue will get this userId to set the userId for website
    // current this.userId is the admin userId
    // need to set it as the userId we just create
    this.userId = userId;
    website = Websites.insert({
      domain: domain
    });

    return 'ok';

  }


});
