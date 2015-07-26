Meteor.startup(function() {


});

AutoForm.hooks({
  insertInstantProfileForm: {
    onSubmit(insertDoc) {

      this.event.preventDefault();
      Meteor.call('insertInstantProfile', insertDoc.domain, function(err, result) {
        if (!err) {
          let id = result;
          FlowRouter.go('/instantProfiler/result/'+id); 
        }
      });

      // return false is same as preventDefault
    }
  }
});



