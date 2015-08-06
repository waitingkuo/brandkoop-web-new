Meteor.startup(function() {

 Template.valuesTooltips.helpers({

    dimension() {
      return Session.get('valuesTooltips:dimension');
    },

    value() {
      return Session.get('valuesTooltips:value');
    },

    score() { 
      return Session.get('valuesTooltips:score');
    },

    descriptions() {
      return Session.get('valuesTooltips:descriptions');
    },

    keywords() {
      keywords = Session.get('valuesTooltips:keywords');
      if (!!keywords) {
        return keywords.join(', ');
      }
    },

    phrases() {
      return Session.get('valuesTooltips:phrases');
    },

    slogans() {
      return Session.get('valuesTooltips:slogans');
    },

    url() {
      return Session.get('valuesTooltips:url');
    },

    image() { 
      return '/images/values/' + Session.get('valuesTooltips:image');
    },

    title() {
      return Session.get('valuesTooltips:title');
    },

 });

});
