Meteor.startup(function() {

  Template.adminBlueprint.onRendered(function() {

    $('#blueprint-menu').steps({

      headerTag: 'h1',
      bodyTag: 'section',
      titleTemplate: '#title#',
      //enableFinishButton: true,
      autoFocus: false,
      transitionEffect: 'slideLeft',

    });

    $('.dd').nestable();

  });

});
