Popup = {

  popoutIfFirstVisit() {

    let cookieName = FlowRouter.Route.name + ':visited';

    if (! $.cookie(cookieName) ) {

      $.cookie(cookieName, 'true');
      $('#popoutWindow').modal();

    }
  },


  resetAllCookies() {

    //FIXME
    let routeNames = [
      'domainCharacter',
      'domainValues',
      'domainCloud',
      'socialCharacter',
      'socialValues',
      'socialCloud',
    ];

    for (let name of routeNames) {
      $.removeCookie(name + ':visited')
    }

  },

  showInfo() {
    $('#infoWindow').modal()
  },
}
