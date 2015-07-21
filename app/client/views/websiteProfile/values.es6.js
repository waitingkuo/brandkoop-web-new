Meteor.startup(function() {

  Template.websiteValues.onRendered(function() {

    Charts.makeValuesChart('overall');
    Charts.makeValuesChart('sincerity');
    Charts.makeValuesChart('excitement');
    Charts.makeValuesChart('competence');
    Charts.makeValuesChart('sophistication');
    Charts.makeValuesChart('ruggedness');

  });

});
