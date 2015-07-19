FlowRouter.route('/', {
  action(params) {
    FlowLayout.render('layout2', {
      main: 'index'
    })
  }
});

FlowRouter.route('/instantProfiler/result/:id', {

  action(params) {
    FlowLayout.render('layout2', {
      main: 'instantProfilerResult'
    })
  }

});
