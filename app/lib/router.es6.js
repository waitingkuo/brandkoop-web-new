/*
 * Middlewares
 */
function requireLogin(context) {
  if (!Meteor.userId()) {
    FlowRouter.go('/');
  }
}


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
 * Signup & Login
 */
FlowRouter.route('/signup', {
  action() {
   FlowLayout.render('layout2', {
    main: 'signup'
   });
  }
});
FlowRouter.route('/login', {

  action() {
   FlowLayout.render('layout2', {
    main: 'login'
   });
  }
});

/*
 * Welcome
 */
FlowRouter.route('/welcome', {

  triggersEnter: [requireLogin],
  action(params) {

   FlowLayout.render('layout2', {
    main: 'welcome'
   });

  }
});
FlowRouter.route('/website/:websiteId/welcome2', {

  triggersEnter: [requireLogin],
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

  triggersEnter: [requireLogin],
  action() {
    FlowRouter.subsReady('userWebsites', function() {
      website = Websites.findOne()
      if (website) {
        // homeRoutePath has some issue
        // if we remove setTimeout, the website character page will still be rendered
        // but the url on the browser will not be change correctly
        setTimeout(function() {
          FlowRouter.go('/website/'+website._id+'/character');
        }, 0);
      } else {
        setTimeout(function() {
          FlowRouter.go('/welcome');
        }, 0);
      }
    });
  }

});

/*
 * Website
 */
FlowRouter.route('/website/:websiteId/character', {
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('websiteCharacter', Meteor.subscribe('websiteCharacter', params.websiteId));
  },

  action(params) {
    FlowRouter.subsReady('websiteCharacter', function() {
      FlowLayout.render('layout', {
        main: 'websiteCharacter'
      });
    });
  }

});

FlowRouter.route('/website/:websiteId/values', {

  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('websiteValue', Meteor.subscribe('websiteValue', params.websiteId));
  },

  action(params) {
    FlowRouter.subsReady('websiteValue', function() {
      FlowLayout.render('layout', {
        main: 'websiteValues'
      });
    });
  }

});

FlowRouter.route('/website/:websiteId/brandcloud', {
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('websiteWordcloud', Meteor.subscribe('websiteWordcloud', params.websiteId));
  },

  action(params) {
    FlowRouter.subsReady('websiteWordcloud', function() {
      FlowLayout.render('layout', {
        main: 'websiteBrandcloud'
      });
    });
  }
});

FlowRouter.route('/social/:twitterId/character', {
  triggersEnter: [requireLogin]
});
FlowRouter.route('/social/:twitterId/values', {
  triggersEnter: [requireLogin]
});
FlowRouter.route('/social/:twitterId/brandcloud', {
  triggersEnter: [requireLogin]
});


/*
 * Admin
 */
FlowRouter.route('/admin/userList', {
  triggersEnter: [requireLogin],

  subscriptions() {
    this.register('adminUserList', Meteor.subscribe('adminUserList'));
  },

  action() {
    FlowLayout.render('layout', {
      main: 'adminUserList'
    });
  }

});
