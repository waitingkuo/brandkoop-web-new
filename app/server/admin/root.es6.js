Meteor.methods({


  addUserToAdmin(id) {
    Roles.addUsersToRoles(id, 'admin');
  }



});
