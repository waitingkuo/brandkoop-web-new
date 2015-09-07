Meteor.startup(function() {

  Template.adminAdvocates.onRendered(function() {
    $('table').DataTable();
  });

});
