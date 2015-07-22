Meteor.startup(function() {

  Template.websiteValues.onRendered(function() {

    setTimeout(function() { // to make this page render faster
      Charts.makeValuesChart('overall');
      Charts.makeValuesChart('sincerity');
      Charts.makeValuesChart('excitement');
      Charts.makeValuesChart('competence');
      Charts.makeValuesChart('sophistication');
      Charts.makeValuesChart('ruggedness');
    }, 300);

  });

});
