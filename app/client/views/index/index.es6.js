Meteor.startup(function() {

  Template.index.events({

    'submit #instant-profiler-form': function(e) {

      e.preventDefault();
      let url = $('#instant-profiler-url').val();
      if (url != '') {

        InstantProfiles.insert({url: url}, function(err, id) {
          FlowRouter.go('/instantProfiler/result/'+id);
        });
      }
    }
         

  });

});
