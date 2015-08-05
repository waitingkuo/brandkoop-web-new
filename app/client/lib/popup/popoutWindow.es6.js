Popup = {

  popupIfFirstVisit() {

    let cookieName = FlowRouter.Route.name + ':visited';

    if (! $.cookie(cookieName) ) {

      $.cookie(cookieName, 'true');
      $('#popupWindow').modal();

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
    //FIXME
    $.removeCookie(':visited')

  },

  showInfo() {
    $('#infoWindow').modal()
  },
}
