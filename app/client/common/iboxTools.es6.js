Meteor.startup(function() {

  Template.iboxTools.events({

      'click .collapse-link': function (event) {
          let element = $(event.target);
          let ibox = element.closest('div.ibox');
          let button = element.closest("i");
          let content = ibox.find('div.ibox-content');
          content.slideToggle(200);
          button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
          ibox.toggleClass('').toggleClass('border-bottom');
          setTimeout(function () {
              ibox.resize();
              ibox.find('[id^=map-]').resize();
          }, 50);
      },

      'click .close-link': function (event) {
          let element = $(event.target);
          let content = element.closest('div.ibox');
          console.log(content);
          content.remove();

      }
  });

});
