/*
 * Scroll to top
 */
FlowRouter.triggers.enter([function() {
  window.scrollTo(0, 0);
  Session.set('chart:notEnoughData', false);
}]);


/*
 * tracking
 */
FlowRouter.triggers.enter([function(context){
    if (context.route && context.route.name) {
      analytics.page(context.route.name);
    } else {
      analytics.page(context.path);
    }
  }]);

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
  this.register('userTwitters', Meteor.subscribe('userTwitters'));
};


/*
 * Landing Page
 */
FlowRouter.route('/', {
  name: 'index',
  action(params) {
    if (Meteor.userId()) {
      FlowRouter.go('/home');
    } else {
      BlazeLayout.render('layout2', {
        main: 'index'
      });
    }
  }
});


/*
 * Instant Profiler
 */
FlowRouter.route('/instantProfiler/result/:instantProfileId', {

  name: 'instantProfilerResult',

  subscriptions(params) {
    this.register('instantProfile', Meteor.subscribe('instantProfile', params.instantProfileId));
    this.register('stories', Meteor.subscribe('stories'));
  },

  action(params) {
    BlazeLayout.render('layout2', {
      main: 'instantProfilerResult'
    });
  }

});

FlowRouter.route('/instantProfiler/limited', {
  name: 'instantProfilerLimited',
  action() {
    BlazeLayout.render('layout2', {
      main: 'instantProfilerLimited',
    });
  },
});

/*
 * Signup & Login
 */
FlowRouter.route('/signup', {
  name: 'signup',
  action() {
   BlazeLayout.render('layout2', {
    main: 'signup'
   });
  }
});
FlowRouter.route('/login', {
  name: 'login',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('/home');
    } else {
      BlazeLayout.render('layout2', {
        main: 'login'
      });
    }
  }
});

/*
 * Welcome
 */
FlowRouter.route('/welcome', {
  name: 'welcome',
  triggersEnter: [requireLogin],
  action(params) {

   BlazeLayout.render('layout2', {
    main: 'welcome'
   });

  }
});
FlowRouter.route('/website/:websiteId/welcome2', {
  name: 'welcome2',
  triggersEnter: [requireLogin],
  subscriptions(params) {
    this.register('currentWebsite', Meteor.subscribe('website', params.websiteId));
  },
  action(params) {

   BlazeLayout.render('layout2', {
    main: 'welcome2'
   });

  }
});

/*
 * Home
 */
FlowRouter.route('/home', {
  name: 'home',
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
  name: 'websiteCharacter',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('websiteCharacter', Meteor.subscribe('websiteCharacter', params.websiteId));
  },

  action(params) {
    FlowRouter.subsReady('websiteCharacter', function() {
      BlazeLayout.render('layout', {
        main: 'websiteCharacter'
      });
    });
  }

});

FlowRouter.route('/website/:websiteId/values', {
  name: 'websiteValues',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('websiteValue', Meteor.subscribe('websiteValue', params.websiteId));
    this.register('stories', Meteor.subscribe('stories'));
  },

  action(params) {
    FlowRouter.subsReady('websiteValue', function() {
      BlazeLayout.render('layout', {
        main: 'websiteValues'
      });
    });
  }

});

FlowRouter.route('/website/:websiteId/brandcloud', {
  name: 'websiteBrandcloud',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('websiteWordcloud', Meteor.subscribe('websiteWordcloud', params.websiteId));
  },

  action(params) {
    FlowRouter.subsReady('websiteWordcloud', function() {
      BlazeLayout.render('layout', {
        main: 'websiteBrandcloud'
      });
    });
  }
});


/*
 * Twitter
 */
FlowRouter.route('/twitter/:twitterId/character', {
  name: 'twitterCharacter',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('twitterCharacter', Meteor.subscribe('twitterCharacter', params.twitterId));
  },

  action(params) {
    FlowRouter.subsReady('twitterCharacter', function() {
      BlazeLayout.render('layout', {
        main: 'twitterCharacter'
      });
    })
  },

});

FlowRouter.route('/twitter/:twitterId/values', {
  name: 'twitterValues',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('twitterValues', Meteor.subscribe('twitterValues', params.twitterId));
    this.register('stories', Meteor.subscribe('stories'));
  },

  action(params) {
    FlowRouter.subsReady('twitterValues', function() {
      BlazeLayout.render('layout', {
        main: 'twitterValues'
      });
    });
  }
});

FlowRouter.route('/twitter/:twitterId/brandcloud', {
  name: 'twitterBrandcloud',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('twitterWordcloud', Meteor.subscribe('twitterWordcloud', params.twitterId));
  },
  action(params) {
    FlowRouter.subsReady('twitterWordcloud', function() {
      BlazeLayout.render('layout', {
        main: 'twitterBrandcloud'
      });
    });
  },
});

/*
 * Harmony
 */
FlowRouter.route('/harmony/:websiteId/:twitterId/character', {
  name: 'harmonyCharacter',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('websiteCharacter', Meteor.subscribe('websiteCharacter', params.websiteId));
    this.register('twitterCharacter', Meteor.subscribe('twitterCharacter', params.twitterId));
  },

  action(params) {
    //FlowRouter.subsReady('websiteCharacter', function() {
      FlowRouter.subsReady('twitterCharacter', function() {
        BlazeLayout.render('layout', {
          main: 'harmonyCharacter'
        });
      });
    //});
  },

});

FlowRouter.route('/harmony/:websiteId/:twitterId/values', {
  name: 'harmonyValues',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    //FIXME make website & twitter more consistent
    this.register('websiteValue', Meteor.subscribe('websiteValue', params.websiteId));
    this.register('twitterValues', Meteor.subscribe('twitterValues', params.twitterId));
    this.register('stories', Meteor.subscribe('stories'));
  },

  action(params) {
    //FlowRouter.subsReady('websiteValue', function() {
      FlowRouter.subsReady('twitterValues', function() {
        BlazeLayout.render('layout', {
          main: 'harmonyValues'
        });
      });
    //});
  }
});

FlowRouter.route('/harmony/:websiteId/:twitterId/brandcloud', {
  name: 'harmonyBrandcloud',
  triggersEnter: [requireLogin],

  subscriptions(params) {
    this.register('websiteWordcloud', Meteor.subscribe('websiteWordcloud', params.websiteId));
    this.register('twitterWordcloud', Meteor.subscribe('twitterWordcloud', params.twitterId));
  },
  action(params) {
    //FlowRouter.subsReady('websiteWordcloud', function() {
      //FlowRouter.subsReady('twitterWordcloud', function() {
        BlazeLayout.render('layout', {
          main: 'harmonyBrandcloud'
        });
      //});
    //});
  },
});




/*
 * Twitter not set
 */
FlowRouter.route('/twitterNotSet', {
  name: 'twitterNotSet',
  triggetsEnter: [requireLogin],
  action(params, queryParams) {
    let title = queryParams.title;
    BlazeLayout.render('layout', {
      main: 'twitterNotSet',
      title: title,
    });
  },
});

/*
 * Blueprint
 */
FlowRouter.route('/blueprint', {
  name: 'blueprint',
  triggersEnter: [requireLogin],
  action(params) {
    BlazeLayout.render('layout', {
      main: 'blueprint',
    });
  },
});
FlowRouter.route('/admin/blueprint', {
  name: 'adminBlueprint',
  triggersEnter: [requireLogin],
  action(params) {
    BlazeLayout.render('layout', {
      main: 'adminBlueprint',
    });
  },
});

/*
 * Advocates
 */
FlowRouter.route('/advocates', {
  name: 'advocates',
  triggersEnter: [requireLogin],
  action(params) {
    BlazeLayout.render('layout', {
      main: 'advocates',
    });
  },
});

FlowRouter.route('/admin/advocates', {
  name: 'adminAdvocates',
  triggersEnter: [requireLogin],
  action(params) {
    BlazeLayout.render('layout', {
      main: 'adminAdvocates',
    });
  },
});

/*
 * Settings
 */
FlowRouter.route('/settings', {
  name: 'settings',
  triggersEnter: [requireLogin],
  action(params) {
    BlazeLayout.render('layout', {
      main: 'settings',
    });
  },
});

/*
 * Admin
 */
FlowRouter.route('/admin/twitter/new', {
  name: 'adminTwitterNew',
  triggersEnter: [requireLogin],

  subscription() {
  },

  action() {
    BlazeLayout.render('layout', {
      main: 'adminTwitterNew',
    });
  },
});

FlowRouter.route('/admin/userList', {
  name: 'adminUserList',
  triggersEnter: [requireLogin],

  subscriptions() {
    this.register('adminUserList', Meteor.subscribe('adminUserList'));
  },

  action() {
    BlazeLayout.render('layout', {
      main: 'adminUserList'
    });
  }

});

FlowRouter.route('/admin/instantProfiles', {
  name: 'adminInstantProfiles',
  triggersEnter: [requireLogin],

  subscriptions() {
    this.register('adminInstantProfiles', Meteor.subscribe('adminInstantProfiles'));
  },

  action() {
    BlazeLayout.render('layout', {
      main: 'adminInstantProfiles'
    });
  }

});

