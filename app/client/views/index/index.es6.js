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

AutoForm.hooks({
  insertInstantProfilesForm: {
    onSubmit(insertDoc) {

      this.event.preventDefault();
      Meteor.call('instantProfile', insertDoc.domain, function(err, result) {
        if (!err) {
          let id = result;
          console.log(result);
          FlowRouter.go('/instantProfiler/result/'+id); 
        }
      });

      // return false is same as preventDefault
    }
  }
});



