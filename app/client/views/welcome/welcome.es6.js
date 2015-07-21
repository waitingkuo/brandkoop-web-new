Meteor.startup(function() {

  AutoForm.addHooks('insertWebsiteForm', {
    onSuccess() {
      let websiteId = this.docId;
      FlowRouter.go('/website/'+websiteId+'/welcome2');
    }
  });

});
