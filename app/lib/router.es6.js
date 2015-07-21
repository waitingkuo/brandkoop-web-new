/*
 * Global
 */

FlowRouter.subscriptions = function() {
  this.register('userWebsites', Meteor.subscribe('userWebsites'));
};


/*
 * Landing Page
 */
FlowRouter.route('/', {
  action(params) {
    FlowLayout.render('layout2', {
      main: 'index'
    })
  }
});


/*
 * Instant Profiler
 */
FlowRouter.route('/instantProfiler/result/:id', {

  action(params) {
    FlowLayout.render('layout2', {
      main: 'instantProfilerResult'
    });
  }

});

/*
 * Welcome
 */
FlowRouter.route('/welcome', {

  action(params) {

   FlowLayout.render('layout2', {
    main: 'welcome'
   });

  }
});
FlowRouter.route('/website/:websiteId/welcome2', {

  subscriptions(params) {
    this.register('currentWebsite', Meteor.subscribe('website', params.websiteId));
  },
  action(params) {

   FlowLayout.render('layout2', {
    main: 'welcome2'
   });

  }
});

/*
 * Home
 */
FlowRouter.route('/home', {

  action() {
    FlowRouter.subsReady('userWebsites', function() {
      website = Websites.findOne()
      if (website) {
        FlowRouter.go('/website/'+website._id+'/character');
      }
    });
  }

});

/*
 * Website
 */
FlowRouter.route('/website/:websiteId/character', {

  action(params) {
    FlowLayout.render('layout', {
      main: 'websiteCharacter'
    });
  }

});

FlowRouter.route('/website/:websiteId/values', {

  action(params) {
    FlowLayout.render('layout', {
      main: 'websiteValues'
    });
  }

});

FlowRouter.route('/website/:websiteId/brandcloud', {
});

FlowRouter.route('/social/:twitterId/character', {
});
FlowRouter.route('/social/:twitterId/values', {
});
FlowRouter.route('/social/:twitterId/brandcloud', {
});

