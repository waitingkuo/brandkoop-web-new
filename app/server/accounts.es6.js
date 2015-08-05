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
    let accessToken = user.services.twitter.accessToken;
    let accessTokenSecret = user.services.twitter.accessTokenSecret;
    let twitter = Twitters.findOne({
      userId: userId,
      twitterUserId: twitterUserId,
    });

    if (!twitter) {
      // autoValue take this.userId
      this.userId = userId;
      Twitters.insert({
        userId: userId,
        twitterUserId: twitterScreenName,
        twitterScreenName: twitterScreenName,
        accessToken: accessToken,
        accessTokenSecret: accessTokenSecret,
      });
    }
    console.log(userId);

  }

});


