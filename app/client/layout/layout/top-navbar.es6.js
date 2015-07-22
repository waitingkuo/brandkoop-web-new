Meteor.startup(function() {

  /*
     FIXED TOP NAVBAR OPTION
     Uncomment this if you want to have fixed top navbar
  Template.topNavbar.onRendered(function() {

     $('body').addClass('fixed-nav');
     $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
    
  });
   */

  Template.topNavbar.events({

    'click #logout': function(event) {

      Meteor.logout()
      //FIXME
      setTimeout(function() {
        FlowRouter.go('/');
      }, 0);

    },

    'click #navbar-minimalize': function(event) {
      event.preventDefault();

      // Toggle special class
      $('body').toggleClass('mini-navbar');

      // Enable smoothly hide/show menu
      if (! ($('body').hasClass('mini-navbar') || $('body').hasClass('body-small'))) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function() {
          $('#side-menu').fadeIn(500);
        }, 100)
      }
      else if ( $('body').hasClass('fixed-sidebar') ) {
          $('#side-menu').hide();
          setTimeout(function() {
            $('#side-menu').fadeIn(500);
          }, 300);
      }
      else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
      }
    }

  });

});
