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
 *
 */
FlowRouter.route('/websiteCharacter/:id', {

  action(params) {
    FlowLayout.render('layout', {
      main: 'websiteCharacter'
    });
  }

});
