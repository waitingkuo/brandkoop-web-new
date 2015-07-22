Accounts.onCreateUser(function(options, user) {

  //console.log('options:', options)
  //console.log('user:', user);
  if (!!options.createdBy) {
    user.createdBy = options.createdBy;
  }
  return user;

});
