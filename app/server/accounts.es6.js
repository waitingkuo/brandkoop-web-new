Accounts.onCreateUser(function(options, user) {

  //console.log('options:', options)
  //console.log('user:', user);
  if (!!options.createdBy) {
    user.createdBy = options.createdBy;
  }
  return user;

});

Accounts.onLogin(function(loginAttempt) {

  if (loginAttempt.type === 'twitter' && loginAttempt.allowed) {

    let user = loginAttempt.user;
    let userId = user._id
    let twitterScreenName = user.services.twitter.screenName;
    let twitterUserId = user.services.twitter.id;
    let twitter = Twitters.findOne({
      userId: userId,
      twitterUserId: twitterUserId,
    });

    if (!twitter) {
      Twitters.insert({
        userId: userId,
        twitterUserId: twitterScreenName,
        twitterScreenName: twitterScreenName,
      });
    }

  }

});


